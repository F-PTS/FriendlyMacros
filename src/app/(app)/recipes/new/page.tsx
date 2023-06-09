"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { NewMealForm } from "~/components/forms/newMealForm";

function Page() {
  return (
    <>
      <h1 className="my-6 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Create a new meal
      </h1>

      <NewMealForm />
    </>
  );
}

export default Page;
