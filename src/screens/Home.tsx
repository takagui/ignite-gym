import { useState } from 'react';
import { VStack, FlatList } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

type TGroupType = 'costa' | 'ombro' | 'tríceps' | 'bíceps'; 

export function Home() {
  const [groups, setGroups] = useState<TGroupType[]>(['costa', 'ombro', 'tríceps', 'bíceps']);
  const [groupSelected, setGroupSelected] = useState<TGroupType>('costa');

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group 
            key={item}
            name={item}
            isActive={groupSelected === item} 
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />
    </VStack>
  )
}
