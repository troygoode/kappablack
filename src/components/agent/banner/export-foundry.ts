import type { IAgent } from "@/types/agent";

import * as z from "zod";
import { customAlphabet } from "nanoid";
import { nolookalikesSafe } from "nanoid-dictionary";

import {
  FoundryVTTSchema,
  WeaponSchema,
  MotivationSchema,
  GearSchema,
  BondSchema,
  ItemSchema,
} from "@/schemas/foundry";
import skillData from "@/data/skills.json";

type TFoundryVTTAgent = z.infer<typeof FoundryVTTSchema>;
type TWeaponSchema = z.infer<typeof WeaponSchema>;
type TMotivationSchema = z.infer<typeof MotivationSchema>;
type TGearSchema = z.infer<typeof GearSchema>;
type TBondSchema = z.infer<typeof BondSchema>;
type TItemSchema = z.infer<typeof ItemSchema>;

const KAPPABLACK_OTHER = "Other Skills";
const FOUNDRY_OTHER = "Other";

const idGenerator = customAlphabet(nolookalikesSafe, 16); // Foundry requires 16 chars
const toKey = (label: string) => {
  switch (label.toLowerCase()) {
    case "heavy machinery":
      return "heavy_machiner"; // No "y" at the end in Foundry...

    case "strength":
      return "str";
    case "constitution":
      return "con";
    case "dexterity":
      return "dex";
    case "intelligence":
      return "int";
    case "power":
      return "pow";
    case "charisma":
      return "cha";

    default:
      return label.toLowerCase().replace(/\s+/g, "_");
  }
};
const toParagraphs = (text: string): string => {
  return (
    (text ?? "")
      .split("\n")
      .map((p) => `<p>${p.trim()}</p>`)
      .join("\n") ?? ""
  );
};
const toSplitParagraphs = (text: string): { text: string; p: string }[] => {
  if (!text?.length) return [];
  return (text ?? "").split("\n").map((p) => ({
    text: p,
    p: `<p>${p.trim()}</p>`,
  }));
};
function toSafeSkillName(skill: string): string {
  // Foundry expects "Drive" instead of "Driving"
  if (skill === "Driving") return "Drive";
  return skill;
}

export function exportFoundryAgent(agent: IAgent): TFoundryVTTAgent {
  const unnatural = agent.skills?.find((s) => s.skill === "Unnatural");

  const weapons: TWeaponSchema[] =
    agent.weapons?.map((weapon) => ({
      type: "weapon",
      _id: idGenerator(),
      name: weapon.weapon ?? "Unknown Weapon",
      img: "systems/deltagreen/assets/icons/swap-bag-black-bg.svg",
      system: {
        name: weapon.weapon ?? "Unknown Weapon",
        description: weapon.weapon ?? "",
        skill: weapon.skill ?? "",
        skillModifier: 0,
        customSkillTarget: 0, // TODO lookup skill or stat value
        range: weapon.range ?? "",
        damage: weapon.damage ?? "",
        armorPiercing: weapon.ap ?? 0,
        lethality: weapon.lethality ?? 0,
        isLethal: weapon.lethality && weapon.lethality > 0 ? true : false,
        killRadius: weapon.radius ?? "",
        ammo: weapon.ammo?.toString() ?? "",
        expense: "",
        equipped: true,
      },
    })) ?? [];

  const motivations: TMotivationSchema[] = toSplitParagraphs(
    agent.motivationsAndDisorders ?? ""
  ).map((p) => {
    return {
      type: "motivation",
      _id: idGenerator(),
      name: p.text,
      img: "systems/deltagreen/assets/icons/swap-bag-black-bg.svg",
      system: {
        name: p.text,
        description: p.p,
        disorder: "",
        crossedOut: false,
        disorderCured: false,
      },
    };
  });
  const gear: TGearSchema[] = [
    {
      type: "gear",
      _id: idGenerator(),
      name: "Agent's Gear",
      img: "systems/deltagreen/assets/icons/swap-bag-black-bg.svg",
      system: {
        name: "Agent's Gear",
        description: toParagraphs(agent.gear ?? ""),
        expense: "",
        equipped: true,
      },
    },
  ];
  const bonds: TBondSchema[] =
    agent.bonds?.map((bond) => ({
      type: "bond",
      _id: idGenerator(),
      name: bond.bond ?? "Unknown Bond",
      img: "systems/deltagreen/assets/icons/person-black-bg.svg",
      system: {
        name: bond.bond ?? "Unknown Bond",
        description: bond.bond ?? "",
        score: bond.score ?? 0,
        relationship: "",
        hasBeenDamagedSinceLastHomeScene: bond.marked ?? false,
      },
    })) ?? [];

  const items: TItemSchema[] = [];
  for (const w of weapons) {
    items.push(w);
  }
  for (const m of motivations) {
    items.push(m);
  }
  for (const g of gear) {
    items.push(g);
  }
  for (const b of bonds) {
    items.push(b);
  }

  const foundryAgent: TFoundryVTTAgent = {
    type: "agent",
    name: agent.name ?? "Unknown Agent",
    prototypeToken: {
      name: agent.name ?? "Unknown Agent",
    },
    items,
    system: {
      schemaVersion: 1,
      biography: {
        profession: agent.profession ?? "",
        employer: agent.employer ?? "",
        nationality: agent.nationality ?? "",
        age: agent.age ?? "",
        education: agent.education ?? "",
        sex: (
          (agent.sex?.toLowerCase() === "m" || agent.sex?.toLowerCase() === "f"
            ? agent.sex
            : agent.sexOther) ?? "m"
        ).toUpperCase(),
      },
      physical: {
        description: agent.physicalDescription ?? "",
        wounds: agent.wounds ?? "",
        firstAidAttempted: agent.firstAidAttempted ?? false,
        exhausted: false,
        exhaustedPenalty: 0,
      },
      physical_description: "",
      physicalDescription: agent.notes
        ? toParagraphs(agent.notes ?? "")
        : undefined,
      statistics: {
        str: {
          value: agent.strength?.score ?? 0,
          distinguishing_feature: agent.strength?.feature ?? "",
          x5: (agent.strength?.score ?? 0) * 5,
        },
        con: {
          value: agent.constitution?.score ?? 0,
          distinguishing_feature: agent.constitution?.feature ?? "",
          x5: (agent.constitution?.score ?? 0) * 5,
        },
        dex: {
          value: agent.dexterity?.score ?? 0,
          distinguishing_feature: agent.dexterity?.feature ?? "",
          x5: (agent.dexterity?.score ?? 0) * 5,
        },
        int: {
          value: agent.intelligence?.score ?? 0,
          distinguishing_feature: agent.intelligence?.feature ?? "",
          x5: (agent.intelligence?.score ?? 0) * 5,
        },
        pow: {
          value: agent.power?.score ?? 0,
          distinguishing_feature: agent.power?.feature ?? "",
          x5: (agent.power?.score ?? 0) * 5,
        },
        cha: {
          value: agent.charisma?.score ?? 0,
          distinguishing_feature: agent.charisma?.feature ?? "",
          x5: (agent.charisma?.score ?? 0) * 5,
        },
      },
      health: {
        value: agent.hp ?? 0,
        max: Math.ceil(
          ((agent.strength?.score ?? 0) + (agent.constitution?.score ?? 0)) / 2
        ),
        min: 0,
        protection: 0,
      },
      wp: {
        value: agent.wp ?? 0,
        max: agent.power?.score ?? 0,
        min: 0,
      },
      sanity: {
        value: agent.san ?? 0,
        max: 99 - (unnatural?.score ?? 0),
        currentBreakingPoint: agent.bp ?? 0,
        adaptations: {
          violence: {
            incident1:
              agent.violenceAdaptation && agent.violenceAdaptation >= 1
                ? true
                : false,
            incident2:
              agent.violenceAdaptation && agent.violenceAdaptation >= 2
                ? true
                : false,
            incident3:
              agent.violenceAdaptation && agent.violenceAdaptation >= 3
                ? true
                : false,
            isAdapted:
              agent.violenceAdaptation && agent.violenceAdaptation >= 3
                ? true
                : false,
          },
          helplessness: {
            incident1:
              agent.helplessnessAdaptation && agent.helplessnessAdaptation >= 1
                ? true
                : false,
            incident2:
              agent.helplessnessAdaptation && agent.helplessnessAdaptation >= 2
                ? true
                : false,
            incident3:
              agent.helplessnessAdaptation && agent.helplessnessAdaptation >= 3
                ? true
                : false,
            isAdapted:
              agent.helplessnessAdaptation && agent.helplessnessAdaptation >= 3
                ? true
                : false,
          },
        },
      },
      skills: skillData.skills.reduce((acc, skill) => {
        if (skill.multi) return acc;

        const agentSkill = agent.skills?.find((s) => s.skill === skill.name);

        acc[toKey(toSafeSkillName(skill.name))] = {
          key: toKey(toSafeSkillName(skill.name)),
          label: toSafeSkillName(skill.name),
          sortLabel: toSafeSkillName(skill.name),
          tooltip: skill.tooltip,
          proficiency: agentSkill?.score ?? 0,
          failure: agentSkill?.marked ?? false,

          cannotBeImprovedByFailure: false,
          isCalculatedValue: false,
          targetProficiency: 0,
        };
        return acc;
      }, {} as any),
      typedSkills: skillData.skills
        .filter((s) => !!s.multi)
        .reduce((acc, skill) => {
          if (!skill.multi) return acc;

          const agentSkills =
            agent.skills?.filter(
              (s) =>
                s.skill === skill.name &&
                (s.type?.length ||
                  s.score !== undefined ||
                  s.marked != undefined)
            ) ?? [];
          if (!agentSkills.length) return acc;

          for (const s of agentSkills) {
            const key = idGenerator();
            acc[key] = {
              type: "typeSkill",
              key,
              actorType: "agent",
              label: s.type ?? "Unknown Skill",
              sortLabel: s.type ?? "Unknown Skill",
              group:
                skill.name === KAPPABLACK_OTHER ? FOUNDRY_OTHER : skill.name,
              proficiency: s.score ?? 0,
              failure: s.marked ? true : false,
            };
          }

          return acc;
        }, {} as Record<string, any>),
      specialTraining:
        agent.specialTraining?.map((training) => ({
          id: idGenerator(),
          name: training.training ?? "Unknown Training",
          attribute: training.skillOrStat?.length
            ? toKey(training.skillOrStat)
            : "str", // TODO looks like this expects e.g. "dex" instead of "Dexterity"
        })) ?? [],
    },
  };

  try {
    FoundryVTTSchema.parse(foundryAgent);
  } catch (e) {
    console.error("Foundry VTT Export :: Valdation Error", e);
  }
  return foundryAgent;
}
