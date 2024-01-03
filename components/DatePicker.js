import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useState } from "react";
import { colors } from "../values/colors.js";
import { numbers } from "../values/numbers.js";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

export default function DatePicker() {
  const [date, setDate] = useState(dayjs());
  const [show, setShow] = useState(false);
  return (
    <View style={styles.dateContainer}>
      <Pressable
        hitSlop={10}
        onPress={() => {
          setDate(dayjs(date).subtract(1, "day"));
        }}
      >
        <Image
          source={require("../assets/arrow-left.png")}
          style={styles.arrowIcon}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          setShow(true);
        }}
      >
        <Text style={styles.text}>{dayjs(date).format("MM/DD")}</Text>
        {/* {show && (
          <View style={styles.datePickerContainer}>
            <DateTimePicker
              style={styles.datePicker}
              value={date}
              onValueChange={(date) => setDate(date)}
              calendarTextStyle={styles.calendarTextStyle}
              headerTextStyle={styles.calendarTextStyle}
            />
          </View>
        )} */}
      </Pressable>
      <Pressable
        hitSlop={10}
        onPress={() => {
          setDate(dayjs(date).add(1, "day"));
        }}
      >
        <Image
          source={require("../assets/arrow-right.png")}
          style={styles.arrowIcon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: colors.dark2,
  },
  arrowIcon: {
    width: 20,
    height: 15,
  },
  text: {
    color: colors.lightest,
    fontSize: numbers.textmd,
    paddingHorizontal: 10,
  },
  datePickerContainer: {
    backgroundColor: colors.dark1,
    borderRadius: 5,
    width: 300,
    height: 300,
  },
  calendarTextStyle: {
    color: colors.lightest,
  },
});
