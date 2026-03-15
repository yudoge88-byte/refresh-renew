import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface SubmitQuoteArgs {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
}

export function useSubmitQuoteRequest() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      projectDetails,
    }: SubmitQuoteArgs) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitQuoteRequest(name, email, phone, projectDetails);
    },
  });
}
