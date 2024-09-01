import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { Platform } from "./GameCard";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconmap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    linux: FaLinux,
  };
  return (
    <>
      <HStack paddingTop={2}>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconmap[platform.slug]}
            color={"gray.500"}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
