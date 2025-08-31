import { useState } from "react";
import { z } from "zod";
import { Button, Input, Label } from "@/shared/ui/kit";
const initialFormState = {
  name: "",
  email: "",
  phone: "",
};

const formDataSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  phone: z.string(),
});

type FormData = z.infer<typeof formDataSchema>;

export const EventForm = () => {
  const [userFormData, setFormData] = useState<Partial<FormData>>({});
  const [showErrors, setShowErrors] = useState(false);
  const formData = { ...initialFormState, ...userFormData };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    if (errors) {
      setShowErrors(true);
    }
    alert(JSON.stringify(userFormData, null, 2));
    console.log(JSON.stringify(userFormData));
    // await requestUserMutation.mutateAsync({
    //     ...formData
    // })
  };

  const validate = () => {
    const res = formDataSchema.safeParse(formData);

    if (res.success) {
      return undefined;
    }

    return res.error.format;
  };

  const errors = showErrors ? validate() : undefined;
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6 w-3/4">
        <div className="flex flex-col gap-2">
          <Label>Имя *</Label>
          <Input
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="focus:ring-0 focus:ring-0 h-[40px] rounded-[8px]"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="focus:ring-0 focus:ring-0 h-[40px] rounded-[8px]"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Телефон *</Label>
          <Input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="focus:ring-0 focus:ring-0 h-[40px] rounded-[8px]"
            required
          />
        </div>
        <Button
          disabled={!!errors}
          onClick={() => alert()}
          className="w-fit bg-[#006bff] rounded-full h-[40px] hover:bg-[#004eba]"
        >
          Запланировать событие
        </Button>
      </div>
    </form>
  );
};
