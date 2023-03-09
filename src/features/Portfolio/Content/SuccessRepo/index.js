import { Container, Description, Link, LinkLabel, List, StyledTile, Title, } from "./styled";

export const SuccesRepo = ({ repositories }) => {

    return (
        <List>
            {repositories && repositories.map(({ id, name, description, homepage, html_url }) => (
                <StyledTile key={id}>
                    <Container>
                        <Title>{(name[0].toUpperCase()+name.substring(1)).replaceAll("-", " ")} </Title>
                        <Description>{description}</Description>
                        <LinkLabel>
                            Demo:{" "}
                            <Link href={homepage} target="_blank">{homepage}</Link>
                        </LinkLabel>
                        <LinkLabel>
                            Code:{" "}
                            <Link href={html_url} target="_blank">
                                {html_url}
                            </Link>
                        </LinkLabel>
                    </Container>
                </StyledTile>
            )
            )}
        </List>
    );
};

export default SuccesRepo;
