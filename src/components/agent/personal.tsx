"use client";

import { AgentField } from "./form/agent-field";
import { AgentLabel } from "./form/agent-label";
import { AgentTextField } from "./form/agent-text-field";
import { AgentTextInput } from "./form/agent-text-input";
import { SideHeader } from "./form/side-header";

interface IAgent {
  name?: string;
  profession?: string;
  employer?: string;
  nationality?: string;
  sex?: string;
  age?: string;
  education?: string;
}

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

const Sex = ({ state }: { state: IAgent }) => (
  <AgentField className="col-span-6 lg:col-span-3 print:col-span-3">
    <AgentLabel length={0} maxLength={100}>
      5. Sex
    </AgentLabel>
    <div className="flex gap-3 print:text-sm">
      <div
        className="flex gap-3"
        id="headlessui-radiogroup-:r13:"
        role="radiogroup"
      >
        <div className="flex items-center gap-1" data-headlessui-state="">
          <span
            className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
            id="headlessui-control-:r14:"
            role="radio"
            tabIndex={-1}
          />
          <label id="headlessui-label-:r16:" htmlFor="headlessui-control-:r14:">
            F
          </label>
        </div>
        <div className="flex items-center gap-1" data-headlessui-state="">
          <span
            className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
            id="headlessui-control-:r17:"
            role="radio"
            aria-checked="false"
            tabIndex={-1}
            aria-labelledby="headlessui-label-:r19:"
          />
          <label id="headlessui-label-:r19:" htmlFor="headlessui-control-:r17:">
            M
          </label>
        </div>
      </div>
      <div className="grow">
        <AgentTextInput fieldName="sexOther" maxLength={50} defaultValue="" />
      </div>
    </div>
  </AgentField>
);

export default function Personal() {
  const onFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    return;
  };

  const state: IAgent = { name: "Unnamed agent" };

  return (
    <div>
      <form onChange={onFormChange} className="w-full">
        <div className="flex flex-col outline-1 outline-slate-500 sm:flex-row print:outline-slate-950 ">
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
