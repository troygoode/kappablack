"use client";

import { useState } from "react";

import { type IAgent } from "@/tagent";

import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { AgentField } from "./form/agent-field";
import { AgentLabel } from "./form/agent-label";
import { AgentTextField } from "./form/agent-text-field";
import { AgentTextInput } from "./form/agent-text-input";
import { SideHeader } from "./form/side-header";
import { SquareRadioGroupItem } from "./form/square-radio-group-item";

const Name = ({ state }: { state: IAgent }) => (
  <AgentTextField
    state={state}
    fieldName="name"
    className="sm:col-span-6"
    label="1. Last Name, First Name, Middle Initial"
    maxLength={100}
  />
);

const Profession = ({ state }: { state: IAgent }) => (
  <AgentTextField
    state={state}
    fieldName="profession"
    className="sm:col-span-6"
    label="2. Profession (rank if applicable)"
    maxLength={100}
  />
);

const Employer = ({ state }: { state: IAgent }) => (
  <AgentTextField
    state={state}
    fieldName="employer"
    className="sm:col-span-6"
    label="3. Employer"
    maxLength={100}
  />
);

const Nationality = ({ state }: { state: IAgent }) => (
  <AgentTextField
    state={state}
    fieldName="nationality"
    className="sm:col-span-6"
    label="4. Nationality"
    maxLength={100}
  />
);

const Age = ({ state }: { state: IAgent }) => (
  <AgentTextField
    state={state}
    fieldName="age"
    className="sm:col-span-6 lg:col-span-2 print:col-span-2"
    label="6. Age and D.O.B."
    maxLength={100}
  />
);

const Education = ({ state }: { state: IAgent }) => (
  <AgentTextField
    state={state}
    fieldName="education"
    className="sm:col-span-12 lg:col-span-7 print:col-span-7"
    label="7. Education and occupational history"
    maxLength={100}
  />
);

const Sex = ({ state }: { state: IAgent }) => {
  const maxLength = 100;
  const [sex, setSex] = useState(
    state.sex === "m"
      ? "sex-m"
      : state.sex === "f"
      ? "sex-f"
      : state.sex === "other"
      ? "sex-other"
      : "sex-m"
  );
  const [sexOther, setSexOther] = useState(state.sex ?? "");

  const onSexOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSexOther(e.target.value);
    state.sexOther = e.target.value;
  };
  const onSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSex(e.target.value);
      switch (e.target.value) {
        case "sex-m":
          state.sex = "m";
          break;
        case "sex-f":
          state.sex = "f";
          break;
        case "sex-other":
          state.sex = "other";
          break;
        default:
          state.sex = "m";
          break;
      }
    }
  };

  return (
    <AgentField className="col-span-6 lg:col-span-3 print:col-span-3">
      <AgentLabel
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
            />
            <Label htmlFor="sex-m">M</Label>
          </div>
          <div className="flex items-center gap-1">
            <SquareRadioGroupItem
              value="sex-f"
              id="sex-f"
              className={sex === "sex-f" ? "cursor-default" : "cursor-pointer"}
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
            />
          </div>
        </RadioGroup>
        <div className="grow">
          <AgentTextInput
            disabled={sex !== "sex-other"}
            fieldName="sexOther"
            maxLength={maxLength}
            defaultValue={sexOther}
            onChange={onSexOtherChange}
          />
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

  const state: IAgent = { name: "Unnamed agent" };

  return (
    <div>
      <form onChange={onFormChange} className="w-full">
        <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 ">
          <SideHeader>Personal Data</SideHeader>
          <div className="w-full">
            <div className="flex w-full flex-col justify-stretch sm:grid sm:grid-cols-12">
              <Name state={state} />
              <Profession state={state} />
              <Employer state={state} />
              <Nationality state={state} />
              <Sex state={state} />
              <Age state={state} />
              <Education state={state} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
