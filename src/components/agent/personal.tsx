"use client";

import { useState } from "react";
import { useShallow } from "zustand/shallow";

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
      label={
        <>
          <span className="sm:hidden md:inline">
            1. Last Name, First Name, Middle Initial
          </span>
          <span className="hidden sm:inline md:hidden">
            1. Last Name, First Name, Middle
          </span>
        </>
      }
      value={(agent) => agent.name}
      merge={(value) => ({ name: value })}
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
    merge={(value) => ({ profession: value })}
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
    merge={(value) => ({ employer: value })}
    maxLength={100}
    className="sm:col-span-6"
  />
);

const Nationality = () => (
  <AgentTextField
    fieldName="nationality"
    label="4. Nationality"
    value={(agent) => agent.nationality}
    merge={(value) => ({ nationality: value })}
    maxLength={100}
    className="sm:col-span-6"
  />
);

const Age = () => (
  <AgentTextField
    fieldName="age"
    label="6. Age and D.O.B."
    value={(agent) => agent.age}
    merge={(value) => ({ age: value })}
    maxLength={100}
    className="sm:col-span-6 lg:col-span-2 print:col-span-2"
  />
);

const Education = () => (
  <AgentTextField
    fieldName="education"
    label="7. Education and occupational history"
    value={(agent) => agent.education}
    merge={(value) => ({ education: value })}
    maxLength={100}
    className="sm:col-span-12 lg:col-span-7 print:col-span-7"
  />
);

const Sex = () => {
  const {
    sex: storeSex,
    sexOther: storeSexOther,
    isLoaded,
  } = useAgentStore(
    useShallow((state) => ({
      sex: state.agent.sex,
      sexOther: state.agent.sexOther,
      isLoaded: state.isLoaded,
    }))
  );
  const merge = useAgentStore((state) => state.merge);

  const maxLength = 100;
  const [sex, setSex] = useState(
    storeSex === "m"
      ? "sex-m"
      : storeSex === "f"
      ? "sex-f"
      : storeSex === "other"
      ? "sex-other"
      : "sex-m"
  );
  const [sexOther, setSexOther] = useState(storeSexOther ?? "");

  const onSexOtherChange = (value: string) => {
    setSexOther(value);
    merge({ sexOther: value });
  };
  const onSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSex(e.target.value);
      switch (e.target.value) {
        case "sex-m":
          merge({ sex: "m" });
          break;
        case "sex-f":
          merge({ sex: "f" });
          break;
        case "sex-other":
          merge({ sex: "other" });
          break;
        default:
          merge({ sex: "m" });
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
        5. Sex ({isLoaded ? "loaded" : "loading"})
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
              disabled={!isLoaded}
            />
            <Label htmlFor="sex-m">M</Label>
          </div>
          <div className="flex items-center gap-1">
            <SquareRadioGroupItem
              value="sex-f"
              id="sex-f"
              className={sex === "sex-f" ? "cursor-default" : "cursor-pointer"}
              disabled={!isLoaded}
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
              disabled={!isLoaded}
            />
          </div>
        </RadioGroup>
        <div className="grow">
          {isLoaded ? (
            <AgentTextInput
              fieldName="sexOther"
              value={sexOther}
              onChange={onSexOtherChange}
              maxLength={maxLength}
              disabled={sex !== "sex-other"}
              required
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
