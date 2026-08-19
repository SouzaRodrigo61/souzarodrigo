import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import type { CvData } from "@/data/cv"

// Layout ATS: 1 coluna, Helvetica, sem foto/tabela/ícone, headings padrão.
const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.45,
    color: "#18181b",
    paddingTop: 46,
    paddingBottom: 46,
    paddingHorizontal: 50,
  },
  name: { fontSize: 20, fontFamily: "Helvetica-Bold", letterSpacing: 0.2, lineHeight: 1.2 },
  title: { fontSize: 11, color: "#059669", fontFamily: "Helvetica-Bold", marginTop: 6, lineHeight: 1.2 },
  contacts: { fontSize: 8.5, color: "#52525b", marginTop: 5 },
  section: { marginTop: 14 },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: "#d4d4d8",
    paddingBottom: 3,
    marginBottom: 7,
  },
  summary: { textAlign: "justify" },
  expHeader: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
  role: { fontFamily: "Helvetica-Bold", fontSize: 10 },
  period: { color: "#52525b", fontSize: 8.5 },
  company: { color: "#3f3f46", fontSize: 9, marginBottom: 3 },
  bulletRow: { flexDirection: "row", marginBottom: 2 },
  bulletDot: { width: 10 },
  bulletText: { flex: 1, textAlign: "justify" },
  projectName: { fontFamily: "Helvetica-Bold", fontSize: 9.5, marginTop: 6 },
  projectDesc: { textAlign: "justify", marginBottom: 2 },
  skillRow: { flexDirection: "row", marginBottom: 2 },
  skillGroup: { fontFamily: "Helvetica-Bold", width: 92 },
  skillItems: { flex: 1 },
})

export function CvDocument({ data }: { data: CvData }) {
  return (
    <Document
      title={`${data.name} — ${data.title}`}
      author={data.name}
      subject={data.title}
    >
      <Page size="A4" style={s.page}>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.title}>{data.title}</Text>
        <Text style={s.contacts}>{data.contacts.join("  •  ")}</Text>

        <View style={s.section}>
          <Text style={s.summary}>{data.summary}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.experience}</Text>
          {data.experiences.map((exp) => (
            <View key={exp.company + exp.period} wrap={false}>
              <View style={s.expHeader}>
                <Text style={s.role}>{exp.role}</Text>
                <Text style={s.period}>{exp.period}</Text>
              </View>
              <Text style={s.company}>{exp.company}</Text>
              {exp.bullets.map((b, i) => (
                <View key={i} style={s.bulletRow}>
                  <Text style={s.bulletDot}>–</Text>
                  <Text style={s.bulletText}>{b}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.projects}</Text>
          {data.projects.map((p) => (
            <View key={p.name} wrap={false}>
              <Text style={s.projectName}>{p.name}</Text>
              <Text style={s.projectDesc}>
                {p.description}
                {p.link ? ` (${p.link})` : ""}
              </Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.education}</Text>
          {data.education.map((e) => (
            <View key={e.title} style={s.expHeader}>
              <Text>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>{e.title}</Text>
                {` — ${e.institution}`}
              </Text>
              <Text style={s.period}>{e.period}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.skills}</Text>
          {data.skills.map((sk) => (
            <View key={sk.group} style={s.skillRow}>
              <Text style={s.skillGroup}>{sk.group}</Text>
              <Text style={s.skillItems}>{sk.items}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.languages}</Text>
          <Text>{data.languages.join("  •  ")}</Text>
        </View>
      </Page>
    </Document>
  )
}
