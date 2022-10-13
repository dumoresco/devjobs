import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      card: string;
      primary: string;
      background: string;
      title: string;
      subtitle: string;
      buttonBg: string;
      buttonColor: string;
      shadow: string;
    };
  }
}
