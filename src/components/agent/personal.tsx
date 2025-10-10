"use client";

import { useState } from "react";

import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { AgentField } from "./form/agent-field";
import { AgentLabel } from "./form/agent-label";
import { AgentTextField } from "./form/agent-text-field";
import { AgentTextInput } from "./form/agent-text-input";
import { SideHeader } from "./form/side-header";
import { SquareRadioGroupItem } from "./form/square-radio-group-item";
import { useAgentStore } from "./stores/agent";
import { Skeleton } from "../ui/skeleton";

const Name = () => {
  return (
    <AgentTextField
      fieldName="name"
      label="1. Last Name, First Name, Middle Initial"
      value={(agent) => agent.name}
      update={(agent, value) => ({ ...agent, name: value })}
      maxLength={100}
      required
      className="sm:col-span-6"
    />
  );
};

const Profession = () => (
  <AgentTextField
    fieldName="profession"
    label="2. Profession (rank if applicable)"
    value={(agent) => agent.profession}
    update={(agent, value) => ({ ...agent, profession: value })}
    maxLength={100}
    required
    className="sm:col-span-6"
  />
);

const Employer = () => (
  <AgentTextField
    fieldName="employer"
    label="3. Employer"
    value={(agent) => agent.employer}
    update={(agent, value) => ({ ...agent, employer: value })}
    maxLength={100}
    className="sm:col-span-6"
  />
);

const Nationality = () => (
  <AgentTextField
    fieldName="nationality"
    label="4. Nationality"
    value={(agent) => agent.nationality}
    update={(agent, value) => ({ ...agent, nationality: value })}
    maxLength={100}
    className="sm:col-span-6"
  />
);

const Age = () => (
  <AgentTextField
    fieldName="age"
    label="6. Age and D.O.B."
    value={(agent) => agent.age}
    update={(agent, value) => ({ ...agent, age: value })}
    maxLength={100}
    className="sm:col-span-6 lg:col-span-2 print:col-span-2"
  />
);

const Education = () => (
  <AgentTextField
    fieldName="education"
    label="7. Education and occupational history"
    value={(agent) => agent.education}
    update={(agent, value) => ({ ...agent, education: value })}
    maxLength={100}
    className="sm:col-span-12 lg:col-span-7 print:col-span-7"
  />
);

const Sex = () => {
  const { agent, update } = useAgentStore();

  const maxLength = 100;
  const [sex, setSex] = useState(
    agent?.sex === "m"
      ? "sex-m"
      : agent?.sex === "f"
      ? "sex-f"
      : agent?.sex === "other"
      ? "sex-other"
      : "sex-m"
  );
  const [sexOther, setSexOther] = useState(agent?.sexOther ?? "");

  const onSexOtherChange = (value: string) => {
    setSexOther(value);
    update({ ...agent, sexOther: value });
  };
  const onSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (agent && e.target.checked) {
      setSex(e.target.value);
      switch (e.target.value) {
        case "sex-m":
          update({ ...agent, sex: "m" });
          break;
        case "sex-f":
          update({ ...agent, sex: "f" });
          break;
        case "sex-other":
          update({ ...agent, sex: "other" });
          break;
        default:
          update({ ...agent, sex: "m" });
          break;
      }
    }
  };

  return (
    <AgentField className="col-span-6 lg:col-span-3 print:col-span-3">
      <AgentLabel
        fieldName="sexOther"
        length={sex === "sex-other" ? sexOther.length : -1}
        maxLength={maxLength}
      >
        5. Sex
      </AgentLabel>
      <div className="flex gap-3 print:text-sm">
        <RadioGroup
          className="flex gap-3"
          defaultValue={sex}
          onChange={onSexChange}
        >
          <div className="flex items-center gap-1">
            <SquareRadioGroupItem
              value="sex-m"
              id="sex-m"
              className={sex === "sex-m" ? "cursor-default" : "cursor-pointer"}
              disabled={!agent}
            />
            <Label htmlFor="sex-m">M</Label>
          </div>
          <div className="flex items-center gap-1">
            <SquareRadioGroupItem
              value="sex-f"
              id="sex-f"
              className={sex === "sex-f" ? "cursor-default" : "cursor-pointer"}
              disabled={!agent}
            />
            <Label htmlFor="sex-f">F</Label>
          </div>
          <div className="flex items-center gap-1">
            <SquareRadioGroupItem
              value="sex-other"
              id="sex-other"
              className={
                sex === "sex-other" ? "cursor-default" : "cursor-pointer"
              }
              disabled={!agent}
            />
          </div>
        </RadioGroup>
        <div className="grow">
          {agent ? (
            <AgentTextInput
              fieldName="sexOther"
              value={sexOther}
              onChange={onSexOtherChange}
              maxLength={maxLength}
              disabled={sex !== "sex-other"}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </div>
      </div>
    </AgentField>
  );
};

export default function Personal() {
  const onFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log("form changed", e.target);
    return;
  };

  return (
    <div>
      <form onChange={onFormChange} className="w-full">
        <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 ">
          <SideHeader>Personal Data</SideHeader>
          <div className="w-full">
            <div className="flex w-full flex-col justify-stretch sm:grid sm:grid-cols-12">
              <Name />
              <Profession />
              <Employer />
              <Nationality />
              <Sex />
              <Age />
              <Education />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
