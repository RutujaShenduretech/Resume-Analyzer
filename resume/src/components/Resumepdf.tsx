import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },

  heading: {
    fontSize: 24,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 5,
  },

  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default function ResumePDF({
  data,
}: {
  data: any;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>
          {data.fullName}
        </Text>

        <Text style={styles.text}>
          {data.email}
        </Text>

        <Text style={styles.text}>
          {data.phone}
        </Text>

        <Text style={styles.text}>
          {data.location}
        </Text>

        <Text style={styles.title}>
          Summary
        </Text>

        <Text style={styles.text}>
          {data.summary}
        </Text>

        <Text style={styles.title}>
          Experience
        </Text>

        <Text style={styles.text}>
          {data.company}
        </Text>

        <Text style={styles.text}>
          {data.jobTitle}
        </Text>

        <Text style={styles.text}>
          {data.experience}
        </Text>

        <Text style={styles.title}>
          Education
        </Text>

        <Text style={styles.text}>
          {data.college}
        </Text>

        <Text style={styles.text}>
          {data.degree}
        </Text>

        <Text style={styles.text}>
          {data.cgpa}
        </Text>

        <Text style={styles.text}>
          {data.passingYear}
        </Text>

        <Text style={styles.title}>
          Skills
        </Text>

        <Text style={styles.text}>
          {data.skills}
        </Text>
      </Page>
    </Document>
  );
}