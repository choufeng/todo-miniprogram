import Taro, { FC } from '@tarojs/taro';
import { View, Input } from '@tarojs/components'
import IList from '../../interfaces/ilist'

export const AddItem: FC => (props: any) => {
  return (
    <View>
      <Input ></Input>
      <Button>Add</Button>
    </View>
  )
}