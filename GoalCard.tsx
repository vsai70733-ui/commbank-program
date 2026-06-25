import styled from 'styled-components';



const Icon = styled.h1`

  font-size: 5.5rem;
  
`



export default function GoalCard(props: any) {
  
  const { goal, onClick } = props;
  

  
  return (
    
    <div key={goal.id} onClick={onClick}>
      
      <Icon>{goal.icon}</Icon>Icon>
    
    </div>div>
    
  )
    
}

</Icon>





