import styled from 'styled-components';
const BookingCard = styled.div`
  height: 26px;
  width: ${props => Number(props.length) * 86 + "px"};
  border-radius: 1px;
  background-color: ${props => props.color};
  display: flex;
  align-items:center;
`;
export default BookingCard;