"use client";
import Button from "@nextdaysite/ui/button";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@nextui-org/react";
import { useOnboardingProgressStore } from "../../_util/store";
import { Country, State, City } from "country-state-city";
import { useInterestsStore } from "@/app/(auth)/util/store";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onBoardUserSchema } from "../_util/schema";
import axios from "axios";
import { useSession } from "next-auth/react";

type Props = {};

export default function Profile({}: Props) {
  const updateProgressBar = useOnboardingProgressStore(
    (state) => state.setStep,
  );
  const { interests } = useInterestsStore.getState();
  const [error, setError] = useState<any>(null);
  const { data: session } = useSession();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid, dirtyFields, isSubmitting },
  } = useForm({
    defaultValues: { country: "", state: "", city: "", timezone: "" },
    resolver: zodResolver(onBoardUserSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    if (dirtyFields.timezone) {
      updateProgressBar(100);
      return;
    }
    if (dirtyFields.city) {
      updateProgressBar(85);
      return;
    }
    if (dirtyFields.state) {
      updateProgressBar(65);
      return;
    }
    if (dirtyFields.country) {
      updateProgressBar(50);
      return;
    }

    updateProgressBar(40);
  }, [
    dirtyFields.country,
    dirtyFields.state,
    dirtyFields.city,
    dirtyFields.timezone,
  ]);

  const handleContinue = async (data: any) => {
    const user = {
      Interests: interests,
      City: data.city,
      State: State.getStateByCode(data?.state as string)?.name,
      Country: Country.getCountryByCode(data?.country as string)?.name,
      Timezone: data?.timezone,
    };
    try {
      setError(null);

      const res = await axios.patch(
        // @ts-ignore
        `/v1/users/${session?.user?.user?.id}`,
        user,
        {
          baseURL: process.env.NEXT_PUBLIC_BASE_URL,
          headers: {
            // @ts-ignore
            Authorization: `Bearer ${session?.user?.token.accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log("res", res);

      router.push("/user/home");
    } catch (error: any) {
      setError(error.response?.data);
      console.log(error.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleContinue)}>
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <Select
            label="Country*"
            labelPlacement="outside"
            placeholder="Choose country"
            {...field}
            classNames={{
              mainWrapper: ["mt-12 font-lato"],
              trigger: ["border border-[#E4E7EC] radius-2xl h-[50px]"],
              label: [" text-small mb-4"],
            }}
            variant="bordered"
            required
          >
            {Country.getAllCountries().map((country) => (
              <SelectItem
                key={country.isoCode}
                value={country.isoCode}
                startContent={country.flag}
              >
                {country.name}
              </SelectItem>
            ))}
          </Select>
        )}
      />
      {dirtyFields.country && (
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Select
              label="State*"
              labelPlacement="outside"
              placeholder="Choose state"
              {...field}
              classNames={{
                mainWrapper: ["mt-5 font-lato"],
                trigger: ["border border-[#E4E7EC] radius-2xl h-[50px]"],
                label: [" text-small mb-4"],
              }}
              variant="bordered"
            >
              {State.getStatesOfCountry(watch("country")).map((state) => (
                <SelectItem key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      )}
      {dirtyFields.country && dirtyFields.state && (
        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <Select
              label="City*"
              labelPlacement="outside"
              placeholder="Choose city"
              {...field}
              classNames={{
                mainWrapper: ["mt-5 font-lato"],
                trigger: ["border border-[#E4E7EC] radius-2xl h-[50px]"],
                label: [" text-small mb-4"],
              }}
              variant="bordered"
            >
              {City.getCitiesOfState(watch("country"), watch("state")).map(
                (city) => (
                  <SelectItem key={city.name} value={city.name}>
                    {city.name}
                  </SelectItem>
                ),
              )}
            </Select>
          )}
        />
      )}
      {dirtyFields.country && dirtyFields.state && dirtyFields.city && (
        <Controller
          control={control}
          name="timezone"
          render={({ field }) => (
            <Select
              label="Timezone*"
              labelPlacement="outside"
              placeholder="Select timezone"
              {...field}
              classNames={{
                mainWrapper: ["mt-5 font-lato"],
                trigger: ["border border-[#E4E7EC] radius-2xl h-[50px]"],
                label: [" text-small mb-4"],
              }}
              variant="bordered"
            >
              {/* @ts-ignore */}
              {Country.getCountryByCode(watch("country"))?.timezones.map(
                (zone) => (
                  <SelectItem key={zone.gmtOffsetName}>
                    {zone.gmtOffsetName}
                  </SelectItem>
                ),
              )}
            </Select>
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
