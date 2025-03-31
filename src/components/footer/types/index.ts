import { JSX } from "react";

export interface FooterLinkProps {
    href: string;
    name: string;
  }
  
  export interface SocialLink {
    label: string;
    icon: JSX.Element;
    href: string;
  }