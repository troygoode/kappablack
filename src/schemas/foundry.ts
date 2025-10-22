import * as z from "zod";

const StatSchema = z
  .object({
    value: z.number(),
    distinguishing_feature: z.string(),
    x5: z.number(),
    meleeDamageBonus: z.number().optional(),
    meleeDamageBonusFormula: z.string().optional(),
  })
  .strict();

export const WeaponSchema = z
  .object({
    type: z.literal("weapon"),
    _id: z.string(),
    name: z.string(),
    img: z.literal("systems/deltagreen/assets/icons/swap-bag-black-bg.svg"),
    system: z
      .object({
        name: z.string(),
        description: z.string(),
        skill: z.string(),
        skillModifier: z.literal(0),
        customSkillTarget: z.number(),
        range: z.string(),
        damage: z.string(),
        armorPiercing: z.number(),
        lethality: z.number(),
        isLethal: z.boolean(),
        killRadius: z.string(),
        ammo: z.string(),
        expense: z.string(),
        equipped: z.literal(true),
      })
      .strict(),
  })
  .strict();

export const MotivationSchema = z
  .object({
    type: z.literal("motivation"),
    _id: z.string(),
    name: z.string(),
    img: z.literal("systems/deltagreen/assets/icons/swap-bag-black-bg.svg"),
    system: z
      .object({
        name: z.string(),
        description: z.string(), // <p>blah</p>
        disorder: z.literal(""),
        crossedOut: z.literal(false),
        disorderCured: z.literal(false),
      })
      .strict(),
  })
  .strict();

export const GearSchema = z
  .object({
    type: z.literal("gear"),
    _id: z.string(),
    name: z.string(),
    img: z.literal("systems/deltagreen/assets/icons/swap-bag-black-bg.svg"),
    system: z
      .object({
        name: z.string(),
        description: z.string(), // <p>blah</p>
        expense: z.string(),
        equipped: z.literal(true),
      })
      .strict(),
  })
  .strict();

export const BondSchema = z
  .object({
    type: z.literal("bond"),
    _id: z.string(),
    name: z.string(),
    img: z.literal("systems/deltagreen/assets/icons/person-black-bg.svg"),
    system: z
      .object({
        name: z.string(),
        description: z.string(), // <p>blah</p>
        score: z.number(),
        relationship: z.string(),
        hasBeenDamagedSinceLastHomeScene: z.boolean(),
      })
      .strict(),
  })
  .strict();

export const ItemSchema = z.discriminatedUnion("type", [
  WeaponSchema,
  MotivationSchema,
  GearSchema,
  BondSchema,
]);

const createSkillSchema = (key: string, label: string) =>
  z
    .object({
      key: z.literal(key),
      label: z.literal(label),
      sortLabel: z.literal(label),
      tooltip: z.string(),

      proficiency: z.number(),
      failure: z.boolean(),
      cannotBeImprovedByFailure: z.boolean(),
      isCalculatedValue: z.literal(false),
      targetProficiency: z.literal(0),
    })
    .strict();

export const FoundryVTTSchema = z
  .object({
    type: z.literal("agent"),
    name: z.string(),
    prototypeToken: z
      .object({
        name: z.string(),
      })
      .strict(),
    system: z
      .object({
        schemaVersion: z.literal(1),
        biography: z
          .object({
            profession: z.string(),
            employer: z.string(),
            nationality: z.string(),
            sex: z.string(),
            age: z.string(),
            education: z.string(),
          })
          .strict(),
        physical: z
          .object({
            description: z.string(),
            wounds: z.string(),
            firstAidAttempted: z.boolean(),
            exhausted: z.boolean().optional(),
            exhaustedPenalty: z.number().optional(),
          })
          .strict(),
        physical_description: z.literal(""),
        physicalDescription: z.string().optional(),
        statistics: z
          .object({
            str: StatSchema,
            con: StatSchema,
            dex: StatSchema,
            int: StatSchema,
            pow: StatSchema,
            cha: StatSchema,
          })
          .strict(),
        health: z
          .object({
            value: z.number(),
            min: z.literal(0),
            max: z.number(),
            protection: z.literal(0),
          })
          .strict(),
        wp: z
          .object({
            value: z.number(),
            min: z.literal(0),
            max: z.number(),
          })
          .strict(),
        sanity: z
          .object({
            value: z.number(),
            currentBreakingPoint: z.number(),
            max: z.number(),
            ritual: z.number().optional(),
            adaptations: z
              .object({
                violence: z
                  .object({
                    incident1: z.boolean(),
                    incident2: z.boolean(),
                    incident3: z.boolean(),
                    isAdapted: z.boolean(),
                  })
                  .strict(),
                helplessness: z
                  .object({
                    incident1: z.boolean(),
                    incident2: z.boolean(),
                    incident3: z.boolean(),
                    isAdapted: z.boolean(),
                  })
                  .strict(),
              })
              .strict(),
          })
          .strict(),
        corruption: z
          .object({
            value: z.number(),
            haveSeenTheYellowSign: z.boolean(),
            gift: z.string(),
            insight: z.string(),
          })
          .strict()
          .optional(),
        skills: z
          .object({
            accounting: createSkillSchema("accounting", "Accounting"),
            alertness: createSkillSchema("alertness", "Alertness"),
            anthropology: createSkillSchema("anthropology", "Anthropology"),
            archeology: createSkillSchema("archeology", "Archeology"),
            artillery: createSkillSchema("artillery", "Artillery"),
            athletics: createSkillSchema("athletics", "Athletics"),
            bureaucracy: createSkillSchema("bureaucracy", "Bureaucracy"),
            computer_science: createSkillSchema(
              "computer_science",
              "Computer Science"
            ),
            criminology: createSkillSchema("criminology", "Criminology"),
            demolitions: createSkillSchema("demolitions", "Demolitions"),
            disguise: createSkillSchema("disguise", "Disguise"),
            dodge: createSkillSchema("dodge", "Dodge"),
            drive: createSkillSchema("drive", "Drive"),
            firearms: createSkillSchema("firearms", "Firearms"),
            first_aid: createSkillSchema("first_aid", "First Aid"),
            forensics: createSkillSchema("forensics", "Forensics"),
            // no "y" at the end in Foundry...
            heavy_machiner: createSkillSchema(
              "heavy_machiner", // no "y" at the end in Foundry...
              "Heavy Machinery"
            ),
            heavy_weapons: createSkillSchema("heavy_weapons", "Heavy Weapons"),
            history: createSkillSchema("history", "History"),
            humint: createSkillSchema("humint", "HUMINT"),
            law: createSkillSchema("law", "Law"),
            medicine: createSkillSchema("medicine", "Medicine"),
            melee_weapons: createSkillSchema("melee_weapons", "Melee Weapons"),
            navigate: createSkillSchema("navigate", "Navigate"),
            occult: createSkillSchema("occult", "Occult"),
            persuade: createSkillSchema("persuade", "Persuade"),
            pharmacy: createSkillSchema("pharmacy", "Pharmacy"),
            psychotherapy: createSkillSchema("psychotherapy", "Psychotherapy"),
            ride: createSkillSchema("ride", "Ride"),
            search: createSkillSchema("search", "Search"),
            sigint: createSkillSchema("sigint", "SIGINT"),
            stealth: createSkillSchema("stealth", "Stealth"),
            surgery: createSkillSchema("surgery", "Surgery"),
            survival: createSkillSchema("survival", "Survival"),
            swim: createSkillSchema("swim", "Swim"),
            unarmed_combat: createSkillSchema(
              "unarmed_combat",
              "Unarmed Combat"
            ),
            unnatural: createSkillSchema("unnatural", "Unnatural"),
          })
          .strict(),
        typedSkills: z.record(
          z.string(),
          z
            .object({
              type: z.literal("typeSkill").optional(),
              key: z.string().optional(),
              actorType: z.literal("agent").optional(),
              label: z.string(),
              sortLabel: z.string().optional(),
              group: z.string(),
              proficiency: z.number(),
              failure: z.boolean(),
            })
            .strict()
        ),
        specialTraining: z.array(
          z
            .object({
              name: z.string(),
              attribute: z.string(),
              id: z.string(),
            })
            .strict()
        ),
        sortedSkills: z
          .array(
            z.object({
              // TODO do I need this?
            })
          )
          .optional(),
        sortedCustomSkills: z
          .array(
            z.object({
              // TODO do I need this?
            })
          )
          .optional(),
      })
      .strict(),

    items: z.array(ItemSchema),
  })
  .strict();
