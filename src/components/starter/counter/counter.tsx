import { component$, type Signal } from "@builder.io/qwik";
import styles from "./counter.module.css";
import Gauge from "../gauge";

interface CounterProps {
  count: Signal<number>;
}
export default component$((props: CounterProps) => {
  const { count } = props;
  return (
    <div class={styles["counter-wrapper"]}>
      <Gauge value={count.value} />
    </div>
  );
});
