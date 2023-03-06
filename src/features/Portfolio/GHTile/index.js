import { Code, Container, Content, Demo, GHLink, StyledTile, Title } from "./styled";

const GHTile = () => {
    return (
        <StyledTile>
            <Container>
                <Title>Title of repo</Title>
                <Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </Content>
                <Demo>Demo: <GHLink href="https://validator.w3.org/nu/aa">https://validator.w3.org/nu/</GHLink></Demo>
                <Code>Code: <GHLink href="https://validator.w3.org/nu/bb">https://validator.w3.org/nu/</GHLink></Code>
            </Container>
        </StyledTile>
    )
};

export default GHTile;