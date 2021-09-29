import React from "react";
import AIMarketplace from "snet-ui/images/nav/AIMarketplace.svg";
import AGIStaking from "snet-ui/images/nav/AGIStaking.svg";
import AIPublisher from "snet-ui/images/nav/AIPublisher.svg";
import RFAI from "snet-ui/images/nav/RFAI.svg";
import DevPortal from "snet-ui/images/nav/DevPortal.svg";
import OfficialBlog from "snet-ui/images/nav/OfficialBlog.svg";
import Forum from "snet-ui/images/nav/Forum.svg";
import Telegram from "snet-ui/images/nav/Telegram.svg";
import Podcast from "snet-ui/images/nav/Podcast.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";


export const navData = [
  {
    id: 1,
    name: "Products",
    url: "#",
    sections: [
      {
        section_name: "Featured Products",
        section_type: "megamenu",
        section_elements: [
          {
            section_name: "AI Marketplace",
            section_description: "Browse, Trial, & Integrate AI Services",
            section_url: "https://beta.singularitynet.io",
            section_icon: AIMarketplace,
            external: "true",
          },
          {
            section_name: "AGI Staking",
            section_description: "Stake & Earn AGI Tokens",
            section_url: "https://staking.singularitynet.io/",
            section_icon: AGIStaking,
            external: "true",
          },
          {
            section_name: "AI Publisher",
            section_description: "Create, Monetize & Manage AI Services",
            section_url: "https://publisher.singularitynet.io/",
            section_icon: AIPublisher,
            external: "true",
          },
          {
            section_name: "Request for AI (RFAI)",
            section_description: "Request & Support New AI Services",
            section_url: "https://rfai.singularitynet.io/",
            section_icon: RFAI,
            external: "true",
          },
          {
            section_name: "Developer Portal",
            section_description: "Resource Community for Devs",
            section_url: "https://dev.singularitynet.io/",
            section_icon: DevPortal,
            external: "true",
          },
          {
            section_name: "Getting Started",
            section_description: "Sign Up Free to Get Access to Everything",
            section_url: "https://beta.singularitynet.io/signup",
            external: "true",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Research",
    url: "https://singularitynet.io/research/",
  },
  {
    id: 3,
    name: "Community",
    url: "#",
    sections: [
      {
        section_name: "Community",
        section_type: "megamenu",
        section_elements: [
          {
            section_name: "Official Blog",
            section_description: "Get the Latest News and Updates",
            section_url: "https://blog.singularitynet.io/",
            section_icon: OfficialBlog,
            external: "true",
          },
          {
            section_name: "Forum",
            section_description: "Persistent Community Discussion Board",
            section_url: "https://community.singularitynet.io/",
            section_icon: Forum,
            external: "true",
          },
          {
            section_name: "Telegram",
            section_description: "Live Community Chat Environment",
            section_url: "https://telegram.me/singularitynet",
            section_icon: Telegram,
            external: "true",
          },
          {
            section_name: "Podcast",
            section_description: "Conversations with visionaries",
            section_url: "/podcast",
            section_icon: Podcast,
            external: "false",
          },
        ],
      },
      {
        section_name: "Get Involved",
        section_type: "default",
        section_elements: [
          {
            section_name: "Code Contribution",
            section_url: "https://github.com/singnet",
            external: "true",
          },
          {
            section_name: "Community Voting",
            section_url: "https://voting.singularitynet.io/",
            external: "true",
          },
        ],
      },
      {
        section_name: "Follow Us",
        section_type: "social",
        section_elements: [
          {
            section_name: "Github",
            section_url: "https://github.com/singnet",
            section_icon: GitHubIcon,
            external: "true",
          },
          {
            section_name: "Twitter",
            section_url: "https://twitter.com/singularity_net",
            section_icon: TwitterIcon,
            external: "true",
          },
          {
            section_name: "Facebook",
            section_url: "https://www.facebook.com/singularityNET.io",
            section_icon: FacebookIcon,
            external: "true",
          },
          {
            section_name: "Linkedin",
            section_url: "https://www.linkedin.com/company/singularitynet/",
            section_icon: LinkedInIcon,
            external: "true",
          },
          {
            section_name: "Youtube",
            section_url: "https://www.youtube.com/channel/UCbTE8vfz5zuEK5uRnc2yjrw",
            section_icon: YouTubeIcon,
            external: "true",
          },
          {
            section_name: "Instagram",
            section_url: "https://instagram.com/singularitynet.io",
            section_icon: InstagramIcon,
            external: "true",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "About",
    url: "#",
    sections: [
      {
        section_name: "About Us",
        section_type: "megamenu",
        section_elements: [
          {
            section_name: "SingularityNET Foundation",
            section_description: "A Brief History of SingularityNET",
            section_url: "https://singularitynet.io/aboutus/",
          },
          {
            section_name: "Singularity Studio",
            section_description: "Enterprise AI Solutions",
            section_url: "https://singularity.studio",
            external: "true",
          },
          {
            section_name: "Team",
            section_description: "The Human Minds Behind the AI",
            section_url: "https://singularitynet.io/aboutus/#team",
          },
          {
            section_name: "Newsroom",
            section_description: "Announcements, News and Press Releases",
            section_url: "https://singularitynet.io/newsroom/",
          },
          {
            section_name: "Ecosystem",
            section_description: "Collaborative Projects",
            section_url: "https://singularitynet.io/ecosystem/",
          },
          {
            section_name: "Contact",
            section_description: "Get In Touch With Us",
            section_url: "https://singularitynet.io/contact/",
          },
          {
            section_name: "Roadmap",
            section_description: "What We’re Working on and Toward",
            section_url: "https://singularitynet.io/roadmap/",
          },
          {
            section_name: "Jobs",
            section_description: "Our Open Positions",
            section_url: "https://singularitynet.io/jobs/",
          },
        ],
      },
    ],
  },
];

export const userActions = [
  {
    name: "Login",
    url: "https://beta.singularitynet.io/login",
  },
  {
    name: "Sign up",
    name_responsive: "free",
    url: "https://beta.singularitynet.io/signup",
  },
];
