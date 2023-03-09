import { ListItem, StyledList } from "./styled";

const List = (skills) => {
  return (
    <StyledList>
      {skills.map((skill) => (
        <ListItem key={skill}>
          {skill}
        </ListItem>
      ))}
    </StyledList>
  )
};
export default List;