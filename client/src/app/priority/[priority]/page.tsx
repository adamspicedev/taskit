import ReusablePriority from "@/components/ReusablePriority";
import { Priority } from "@/state/api";

type Props = {
  params: { priority: string };
};

const PriorityPage = ({ params }: Props) => {
  function getKeyByValue(value: string) {
    const normalizedValue = value.toLowerCase();
    const entries = Object.entries(Priority);

    for (const [key, enumValue] of entries) {
      if (enumValue.toLowerCase() === normalizedValue) {
        return enumValue as Priority;
      }
    }

    return Priority.Low;
  }

  return <ReusablePriority priority={getKeyByValue(params.priority)} />;
};

export default PriorityPage;
