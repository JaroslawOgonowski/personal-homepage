import { Container, Description, Link, LinkLabel, List, StyledTile, Title, } from "./styled";

export const SuccesRepo = ({ repositories }) => {
    let formatedName = (repository.name[0].toUpperCase() + repository.name.substring(1)).replaceAll("-", " ");
    return (
        <List>
            {repositories && repositories.map((repository) => (
                <StyledTile key={repository.id}>
                    <Container>
                        <Title>{formatedName}</Title>
                        <Description>{repository.description}</Description>
                        <LinkLabel>
                            Demo:{" "}
                            <Link href={repository.homepage} target="_blank">{repository.homepage}</Link>
                        </LinkLabel>
                        <LinkLabel>
                            Code:{" "}
                            <Link href={repository.html_url} target="_blank">
                                {repository.html_url}
                            </Link>
                        </LinkLabel>
                    </Container>
                </StyledTile>
            )
            )};
        </List>
    );
};

export default SuccesRepo;
