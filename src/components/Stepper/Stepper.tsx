import { Box } from "@mui/material";
import check from "assets/images/icons/check.svg";
import { useTheme } from "hooks/useTheme";
import { ThemeColors } from "shared/types/theme-color.enum";

type Step = {
  label: string;
  content?: {
    text?: string;
    list?: {
      label: string;
      items: string[];
    };
  };
};

type StepperProps = {
  steps: Step[];
};

function Item({ text }: { text: string }) {
  const { dashIcon } = useTheme();

  return (
    <Box className="flex items-center space-x-2 mb-2 first:mt-3.5 last:mb-3.5">
      <img className="mr-2" src={dashIcon} alt="dash" />
      {text}
    </Box>
  );
}

export function Stepper({ steps }: StepperProps) {
  const { themeColor } = useTheme();

  const circleClasses = (index: number) => {
    let stateClass;
    switch (themeColor) {
      case ThemeColors.PRIMARY:
        stateClass =
          !index || index === steps.length - 1
            ? "bg-orange-400"
            : "bg-gradient-to-b from-orange-600 to-orange-500";
        break;
      case ThemeColors.SECONDARY:
        stateClass =
          !index || index === steps.length - 1
            ? "bg-gold-400"
            : "bg-gradient-to-b from-gold-600 to-gold-500";
        break;
      case ThemeColors.BLUE:
        stateClass =
          !index || index === steps.length - 1
            ? "bg-blue-200"
            : "bg-gradient-to-b from-blue-600 to-blue-500";
        break;
    }

    return `${stateClass} w-[42px] h-[42px] text-white rounded-full flex items-center justify-center font-roboto-flex font-semibold relative z-10`;
  };

  const connectorClasses = (index: number) => {
    let secondaryClass;
    switch (themeColor) {
      case ThemeColors.PRIMARY:
        secondaryClass =
          index === 0
            ? "bg-gradient-to-r from-orange-200 to-orange-600"
            : index === steps.length - 2
            ? "bg-gradient-to-r from-orange-600 to-orange-200"
            : "bg-orange-600";
        break;
      case ThemeColors.SECONDARY:
        secondaryClass =
          index === 0
            ? "bg-gradient-to-r from-gold-300 to-gold-600"
            : index === steps.length - 2
            ? "bg-gradient-to-r from-gold-600 to-gold-300"
            : "bg-gold-600";
        break;
      case ThemeColors.BLUE:
        secondaryClass =
          index === 0
            ? "bg-gradient-to-r from-blue-200 to-blue-400"
            : index === steps.length - 2
            ? "bg-gradient-to-r from-blue-400 to-blue-200"
            : "bg-blue-400";
        break;
    }

    return `${secondaryClass} h-1 w-full absolute top-[19px]`;
  };

  return (
    <>
      <Box className="relative flex justify-between flex-col xl:flex-row">
        {steps.map((step, index) => (
          <Box
            className="relative pr-16 mb-20 last:mb-0 xl:w-[calc(100%/5)] xl:mb-0"
            key={index}
          >
            <Box className={circleClasses(index)}>
              {index === steps.length - 1 ? (
                <img src={check} alt="check" />
              ) : (
                index + 1
              )}
            </Box>
            <Box className="font-roboto-flex font-semibold text-grey-100 text-md mt-12 uppercase xl:text-base xl:text-md">
              {step.label}
            </Box>
            <Box className="font-roboto-flex text-grey-300 text-xs mt-3">
              {step.content?.list?.label}
              {step.content?.list?.items.map((item, index) => (
                <Item text={item} key={index} />
              ))}
              {step.content?.text}
            </Box>
            {index < steps.length - 1 ? (
              <Box className={connectorClasses(index)}></Box>
            ) : null}
          </Box>
        ))}
      </Box>
    </>
  );
}
