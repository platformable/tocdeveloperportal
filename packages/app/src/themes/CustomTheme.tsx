import { BackstageOverrides } from "@backstage/core-components";
import { BackstageTheme, darkTheme, lightTheme } from "@backstage/theme";

const createCustomThemeOverrides = (
    theme: BackstageTheme,
  ): BackstageOverrides => {
    return {
      BackstageHeader: {
        header: {
          width: 'auto',
          backgroundImage: `url('/hero-bg.jpg')`,
        },
      },
    };
  };
export  const customTheme: BackstageTheme = {
    ...lightTheme,
    overrides: {
      // These are the overrides that Backstage applies to `material-ui` components
      ...lightTheme.overrides,
      // These are your custom overrides, either to `material-ui` or Backstage components.
      ...createCustomThemeOverrides(lightTheme),
    },
}