

import { Code, Container, Content, Demo, GHLink, Item, List, StyledTile, Title, Wrapper } from "./styled";

export const SuccesRepo = ({repositories}) => {
return (


            <List>
            {repositories && repositories.map((repository) => (
                <Item key={repository.id}>
                    <div>
                    {repository.name}<br/>
                    {repository.description}</div>
                </Item>
            )
            
            )}
        </List>
    
            
)
}

export default SuccesRepo;
        /*<StyledTile>
<Container>
<Title></Title>
<Content>
</Content>
<Demo>Demo: <GHLink href="https://validator.w3.org/nu/aa">https://validator.w3.org/nu/</GHLink></Demo>
<Code>Code: <GHLink href="https://validator.w3.org/nu/bb">https://validator.w3.org/nu/</GHLink></Code>
</Container>
</StyledTile>*/