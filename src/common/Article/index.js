import { Content, Title, Wrapper } from "./styled"

export const Article = ({ title, content }) => (
    <Wrapper>
        <Title>{title}</Title>
        <div>{content}</div>
    </Wrapper>
);
export default Article;