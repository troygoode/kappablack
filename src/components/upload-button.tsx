import { useRef, type PropsWithChildren } from "react";
import { Button } from "./ui/button";

export function UploadButton({
  fieldName,
  accept,
  formAction,
  onSubmit,
  children,
}: PropsWithChildren<{
  fieldName: string;
  accept: string;
  formAction: (payload: FormData) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}>) {
  const ref = useRef<HTMLFormElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ref.current?.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
    return;
  };

  return (
    <div>
      <form ref={ref} action={formAction} onSubmit={onSubmit}>
        <input
          accept={accept}
          className="hidden"
          id={fieldName}
          name={fieldName}
          multiple
          type="file"
          onChange={onChange}
        />
      </form>
      <label htmlFor={fieldName}>
        <Button asChild variant="outline" className="cursor-pointer">
          <span>{children}</span>
        </Button>
      </label>
    </div>
  );
}
