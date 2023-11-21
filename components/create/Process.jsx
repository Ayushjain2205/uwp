import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const BouncingDot = ({delay}) => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [bounceAnim, delay]);

  const bounceY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          transform: [{translateY: bounceY}],
        },
      ]}
    />
  );
};

const Process = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <BouncingDot delay={0} />
        <BouncingDot delay={150} />
        <BouncingDot delay={300} />
      </View>
      <Text style={styles.verificationText}>Verification in process</Text>
      <Text style={styles.description}>
        We will notify you once it’s complete. It usually takes up to 24 hours.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#1A2DD9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  verificationText: {
    fontSize: 24,
    fontWeight: 500,
    marginTop: 32,
    textAlign: 'center',
    fontFamily: 'WorkSans-Medium',
  },
  description: {
    fontSize: 12,
    color: '#00000070',
    textAlign: 'center',
    marginTop: 15,
    width: 200,
    height: 54,
    lineHeight: 18,
    fontFamily: 'WorkSans-Regular',
  },
});

export default Process;
