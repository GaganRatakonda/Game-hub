import {
  List,
  HStack,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton boxSize="32px" borderRadius="8px" />
          <SkeletonText noOfLines={1} width="120px" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
