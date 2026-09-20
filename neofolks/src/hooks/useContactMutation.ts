import { useMutation } from "@tanstack/react-query";
import { submitContactForm } from "@/lib/api";
import type { ContactFormValues } from "@/lib/schemas";

export function useContactMutation() {
  return useMutation({
    mutationFn: (values: ContactFormValues) => submitContactForm(values),
  });
}
