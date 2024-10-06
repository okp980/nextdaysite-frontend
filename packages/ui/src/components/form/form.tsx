import { Input, InputProps } from "@nextui-org/react"

export type formFieldsType = Pick<
  InputProps,
  "type" | "label" | "defaultValue" | "description"
>[]

type Props = {
  formFields: formFieldsType
}

export default function ({ formFields }: Props) {
  return (
    <div>
      {formFields.map((field, index) => (
        <Input key={index} {...field} labelPlacement={"outside"} />
      ))}
    </div>
  )
}
