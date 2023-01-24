import { useState } from 'react';
import { HStack, VStack } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

type TGroupType = 'costa' | 'ombro' | 'tríceps'; 

export function Home() {
  const [groupSelected, setGroupSelected] = useState<TGroupType>('costa');
  
  const groups: TGroupType[] = ['costa', 'ombro', 'tríceps'];

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        {
          groups.map(group => (
            <Group 
              key={group}
              name={group}
              isActive={groupSelected === group} 
              onPress={() => setGroupSelected(group)}
            />
          ))
        }
      </HStack>
    </VStack>
  )
}
