import { Content, Title, Wrapper } from "./styled"

export const Article = ({title, content}) => (

    <Wrapper>
        <Title>{title}</Title>
        <Content>{content}</Content>
    </Wrapper>
);
export default Article;