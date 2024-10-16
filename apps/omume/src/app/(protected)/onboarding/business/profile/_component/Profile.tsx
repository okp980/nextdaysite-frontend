"use client";
import Button from "@nextdaysite/ui/button";
import { Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useOnboardingProgressStore } from "../../../_util/store";
import { Controller, useForm } from "react-hook-form";
import { onBoardBusinessSchema } from "../_util/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

type Props = {};

export default function Profile({}: Props) {
  const updateProgressBar = useOnboardingProgressStore(
    (state) => state.setStep,
  );
  const { data: session } = useSession();

  const [error, setError] = useState<any>(null);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid, dirtyFields, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: { name: "", description: "", url: "", contact: "" },
    resolver: zodResolver(onBoardBusinessSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    if (dirtyFields.contact) {
      updateProgressBar(100);
      return;
    }
    if (dirtyFields.url) {
      updateProgressBar(85);
      return;
    }
    if (dirtyFields.description) {
      updateProgressBar(65);
      return;
    }
    if (dirtyFields.name) {
      updateProgressBar(50);
      return;
    }

    updateProgressBar(40);
  }, [
    dirtyFields.name,
    dirtyFields.description,
    dirtyFields.url,
    dirtyFields.contact,
  ]);

  const handleContinue = async (data: any) => {
    const user = {
      // @ts-ignore
      business_id: session?.user?.user?.id,
      business_name: data.name,
      description: data.description,
      website_url: data.url,
      contact_phone: data?.contact,
    };
    setError(null);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/business-profiles`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // @ts-ignore
          Authorization: `Bearer ${session?.user?.token.accessToken}`,
        },
        body: JSON.stringify(user),
      },
    );

    const result = await res.json();

    if (!res.ok) {
      setError(result);
      return;
    }

    router.push("/business/home");
  };
  return (
    <form onSubmit={handleSubmit(handleContinue)}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            label="Business name*"
            type="text"
            variant="bordered"
            placeholder="Enter your business name"
            labelPlacement={"outside"}
            {...field}
            classNames={{
              label: "text-sm",
              inputWrapper:
                "bg-transparent shadow-none border border-[#EAECF0] mt-10",
              input: "text-base font-normal font-inter text-body]",
            }}
          />
        )}
      />
      {dirtyFields.name && (
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <Textarea
              label="Description*"
              variant="bordered"
              placeholder="Enter a description"
              labelPlacement={"outside"}
              {...field}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow-none border border-[#EAECF0]",
                input: "text-base font-normal font-inter text-body h-4xl]",
                base: ["mt-6"],
              }}
            />
          )}
        />
      )}
      {dirtyFields.description && dirtyFields.name && (
        <Controller
          control={control}
          name="url"
          render={({ field }) => (
            <Input
              label="Website URL*"
              type="text"
              variant="bordered"
              placeholder="Enter your website url"
              labelPlacement={"outside"}
              {...field}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow-none border border-[#EAECF0] h-4xl mt-6",
                input: "text-base font-normal font-inter text-body h-4xl]",
              }}
            />
          )}
        />
      )}
      {dirtyFields.name && dirtyFields.description && dirtyFields.url && (
        <Controller
          control={control}
          name="contact"
          render={({ field }) => (
            <Input
              label="Contact info*"
              type="phone number"
              variant="bordered"
              placeholder="Enter your contact info"
              labelPlacement={"outside"}
              {...field}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow-none border border-[#EAECF0] mt-6",
                input: "text-base font-normal font-inter text-body]",
              }}
            />
          )}
        />
      )}
      {error && <p className="my-5 text-sm text-danger-500">{error.message}</p>}
      <div className="max-w-[208px] mt-12">
        <Button
          color={!isValid ? "default" : "primary"}
          size="lg"
          className="h-12 rounded-2xl text-sm lg:text-base"
          radius="md"
          isDisabled={!isValid}
          fullWidth
          type="submit"
          isLoading={isSubmitting}
        >
          Continue
        </Button>
      </div>
    </form>
  );
}
