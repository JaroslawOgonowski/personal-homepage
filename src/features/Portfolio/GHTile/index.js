import { Code, Container, Content, Demo, GHLink, StyledTile, Title } from "./styled";

const GHTile = () => {
    return (
        <StyledTile>
            <Container>
                <Title>aaaaaaaaaaaaaaaaaaa</Title>
                <Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptates, qui fugiat. Pariatur cumque odit enim ad officiis, eum quo nulla, quidem corporis deleniti veniam, id in a debitis libero rem.
                </Content>
                <Demo>Demo: <GHLink href="https://validator.w3.org/nu/aa">https://validator.w3.org/nu/</GHLink></Demo>
                <Code>Code: <GHLink href="https://validator.w3.org/nu/bb">https://validator.w3.org/nu/</GHLink></Code>
            </Container>
        </StyledTile>
    )
};

export default GHTile;