import { Box, Container, Grid, Text } from "@chakra-ui/react";
import type {Simplify, TeamMemberDocument, TeamMemberDocumentData, TeamSlice} from "../../.slicemachine/prismicio";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Image from "next/image";

const TitleSubtitleCta: React.FC<{ slice: TeamSlice, context: { team_members:TeamMemberDocument[] } }> = ({ slice, context }) => {
  const { primary } = slice;
  const {team_members} = context
  const members_info:{[key:string]:TeamMemberDocumentData[]} = {}
  team_members.forEach((member)=>{
    const {data} = member;
    // @ts-ignore
    const category:string = data.select_team_category.data.team_category_title;
    if(!members_info[category]) members_info[category] = []
    members_info[category].push(data)
  })

  return (
    <>
      <Box
        pos={"relative"}
        bgColor={"lightCreamColor"}
      >
        <Tabs align="center">
          <TabList
            borderBottom={0}
            pt={[4, 5, 6, 7, 8]}
            background={"rgba(247, 247, 247, 0.5)"}
          >
            <Container display={"flex"} justifyContent={"center"}>
              {Object.keys(members_info).map(category=><Tab
                  key={category}
                  fontSize={["sm", null, "md", null, "lg"]}
                  fontWeight={"semibold"}
                  pb={3}
                  color={"placeholderColor"}
                  _selected={{
                    color: "themeDarkPurple",
                    borderBottomColor: "themeDarkPurple",
                    borderBottomWidth: 4,
                    borderStyle: "solid",
                  }}
                  _focus={{ outline: "none" }}
                  _focusWithin={{ outline: "unset" }}
                  px={[6, 7, 8, 9, 10]}
                  _active={{
                    bgColor: "transparent",
                  }}
              >
                {category}
              </Tab>)}

            </Container>
          </TabList>
          <Container maxW={'7xl'} py={[10, 12, 14, 16, 20]}>
            <TabPanels>
              {Object.values(members_info).map((category,i)=><TabPanel key={i}>
                <Grid
                    templateColumns={{
                      base: "repeat(1, 1fr)",
                      sm: "repeat(3, 1fr)",
                      md: "repeat(4, 1fr)",
                    }}
                    gap={[6, 7, 8, 9, 10]}
                >
                  {category?.map((member)=><Box
                      display={"flex"}
                      key={member.name}
                      flexDir={"column"}
                      alignItems={"center"}
                      textAlign={"center"}
                  >
                    <Image
                        src={member.profile_image.url||'./team/avinash.jpg'}
                        alt={member.profile_image.alt||''}
                        width={150}
                        height={150}
                        style={{ borderRadius: 6 }}
                    />
                    <Text size={"sm"} mt={[1, null, 3, null, 4]}>
                      {member.name}
                    </Text>
                    <Text fontSize={"xs"}>
                      {member.designation}
                    </Text>
                  </Box>)}

                </Grid>
              </TabPanel>)}
            </TabPanels>
          </Container>
        </Tabs>
      </Box>
    </>
  );
};

export default TitleSubtitleCta;
