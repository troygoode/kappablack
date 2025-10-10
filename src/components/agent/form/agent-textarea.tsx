import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import classNames from "classnames";

const AgentTextarea = ({
  loading,
  fieldName,
  className,
  skeletonClassName,
  value,
  onChange,
  maxLength,
  required,
}: {
  loading: boolean;
  fieldName: string;
  className?: string;
  skeletonClassName?: string;
  value: string | undefined;
  onChange: (value: string, e?: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
  required?: boolean;
}) => {
  return !loading ? (
    <Textarea
      id={fieldName}
      name={fieldName}
      value={value ?? ""}
      maxLength={maxLength}
      required={required}
      onChange={(e) => {
        if (loading) return;
        onChange(e.target.value, e);
      }}
      className={classNames(
        "min-h-15 h-full w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 print:border-0 print:bg-transparent print:p-0 print:text-sm",
        (value ?? "").length === 0 ? "required:dark:bg-amber-100" : "",
        className
      )}
    />
  ) : (
    <Skeleton
      className={classNames(
        "min-h-15 h-full rounded-md",
        className ?? skeletonClassName
      )}
    />
  );
};

export { AgentTextarea };
