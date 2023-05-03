import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";

export default component$(() => {
  const count = useSignal(0);

  useVisibleTask$(() => {
    console.log(":done");
    const eventSource = new EventSource("/api/sse");
    eventSource.onmessage = (event) => {
      count.value = event.data;
    };
  });
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>Server Sent Event</h3>
        <Counter count={count} />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
