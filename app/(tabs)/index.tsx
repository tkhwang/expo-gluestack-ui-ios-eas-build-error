import { StyleSheet } from "react-native"

import { VStack } from "@/components/ui/vstack"
import { Text } from "@/components/ui/text"

export default function HomeScreen() {
  return (
    <VStack space="md" style={styles.container}>
      <Text>Text using Gluestack 1</Text>
      <Text>Text using Gluestack 2</Text>
      <Text>Text using Gluestack 3</Text>
    </VStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
