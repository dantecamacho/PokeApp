import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';


export default function StatsBox({stats}){
    return (
        <>
        {stats.map( stat => {
            return(
                <Text style={styles.label}>
                    {stat.stat.name.toUpperCase()}
                </Text>
            )
        })}
        </>
    )
}

const styles = StyleSheet.create({
    label: {
      fontWeight: 'bold',
      color: 'gray'

    }
  });