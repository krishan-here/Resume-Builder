import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import LinkImage from '../../../assets/link.png';
import { dateFormatter } from '../../../utils/format';

Font.register({
  family: 'Rubik',
  src: 'https://fonts.gstatic.com/s/rubik/v4/2AfMVb-218AAzRWsLqegwg.ttf',
});

Font.register({
  family: 'Poppins',
  src: 'https://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf',
});

const hyphenationCallback = (word) => {
  return [word];
};

Font.registerHyphenationCallback(hyphenationCallback);

const s = StyleSheet.create({
  page: {
    padding: '30px 40px',
    background: '#fff',
  },
  section: { marginBottom: 20 },
  no_margin: { marginBottom: 0 },
  main_head: {
    textAlign: 'center',
    marginBottom: 35,
    fontWeight: 'ultrabold',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  main_img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: 'cover',
  },
  main_detail: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  main_head_h1: {
    fontSize: 25,
    color: '#7d57c2',
    paddingVertical: 5,
  },
  contact_section: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    gap: 20,
    fontSize: 14,
  },
  header: {
    marginBottom: 5,
  },
  header_h2: {
    fontSize: 20,
    color: '#7d57c2',
    fontFamily: 'Rubik',
  },
  duration: {
    fontSize: 12,
    fontFamily: 'Helvetica-Oblique',
    flexGrow: 1,
    flexBasis: '0%',
    flexShrink: 1,
    textAlign: 'right',
  },
  edu_detail: {
    flexDirection: 'column',
  },
  list_item: {
    marginBottom: 5,
  },
  list_item_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  list_item_title: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Rubik',
    fontWeight: 'extrabold',
    flexGrow: 3,
    flexBasis: '0%',
    flexShrink: 1,
  },
  list_item_description: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'justify',
    color: '#384347',
    fontFamily: 'Poppins',
    lineHeight: 1.5,
  },
  edu_description: {
    flexGrow: 3,
    flexBasis: '0%',
    flexShrink: 1,
  },
  skill_list: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  skill_list_item: {
    fontSize: 14,
    borderWidth: 2,
    borderColor: '#7d57c2',
    borderStyle: 'solid',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontFamily: 'Rubik',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function WordTemplate({
  info,
  education = [],
  experience = [],
  projects = [],
  skills = [],
}) {
  return (
    <Document pageMode='fullScreen'>
      <Page
        size='A4'
        style={s.page}
        id='resume'>
        <View
          style={{
            ...s.main_head,
            justifyContent: info.image ? 'space-between' : 'center',
          }}>
          <View
            style={{
              ...s.main_detail,
              alignItems: info.image ? 'flex-start' : 'center',
            }}>
            <Text style={s.main_head_h1}>{info.name}</Text>
            <View style={s.contact_section}>
              <Text>{info.email}</Text>
              <Text>{info.contact}</Text>
            </View>
          </View>
          {info.image && (
            <View>
              <Image
                style={s.main_img}
                src={info.image}
              />
            </View>
          )}
        </View>

        {experience.length > 0 && experience[0].role !== '' && (
          <View style={s.section}>
            <View style={s.header}>
              <Text style={s.header_h2}>Experience</Text>
            </View>
            <View>
              {experience.map((edu, idx) => {
                if (!edu.role) return null;
                return (
                  <View
                    key={edu.id}
                    style={{
                      ...s.list_item,
                      ...(idx === experience.length - 1 ? s.no_margin : {}),
                    }}>
                    <View style={s.list_item_header}>
                      <Text style={s.list_item_title}>
                        {edu.role} {edu.company && ' | ' + edu.company}
                      </Text>
                      {edu.from && (
                        <Text style={s.duration}>
                          {dateFormatter(edu.from)} -{' '}
                          {edu.to ? dateFormatter(edu.to) : 'Present'}
                        </Text>
                      )}
                    </View>
                    {edu.description && (
                      <Text style={s.list_item_description}>
                        {edu.description}
                      </Text>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {projects.length > 0 && projects[0].name !== '' && (
          <View style={s.section}>
            <View style={s.header}>
              <Text style={s.header_h2}>Projects</Text>
            </View>
            <View>
              {projects.map((project, idx) => {
                if (!project.name) return null;
                return (
                  <View
                    key={project.id}
                    style={{
                      ...s.list_item,
                      ...(idx === projects.length - 1 ? s.no_margin : {}),
                    }}>
                    <View style={s.list_item_header}>
                      <View
                        style={{
                          ...s.list_item_title,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text>{project.name}</Text>
                        {project.link && (
                          <Link
                            href={project.link}
                            style={{ textDecoration: 'none', marginLeft: 10 }}>
                            <Image
                              src={LinkImage}
                              style={{
                                width: 12,
                                objectFit: 'contain',
                              }}
                            />
                          </Link>
                        )}
                      </View>
                      {project.from && (
                        <Text style={s.duration}>
                          {dateFormatter(project.from)} -{' '}
                          {project.to ? dateFormatter(project.to) : 'Present'}
                        </Text>
                      )}
                    </View>
                    <Text style={s.list_item_description}>
                      {project.description}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {skills.length > 0 && skills[0].skill !== '' && (
          <View style={s.section}>
            <View style={s.header}>
              <Text style={s.header_h2}>Skills</Text>
            </View>
            <View style={s.skill_list}>
              {skills.map((skill) => {
                if (!skill.skill) return null;
                return (
                  <View
                    key={skill.id}
                    style={s.skill_list_item}>
                    <Text>{skill.skill}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {education.length > 0 && education[0].course !== '' && (
          <View style={s.section}>
            <View style={s.header}>
              <Text style={s.header_h2}>Education</Text>
            </View>
            <View>
              {education.map((edu, idx) => {
                if (!edu.course) return null;
                return (
                  <View
                    key={edu.id}
                    style={{
                      ...s.list_item,
                      ...(idx === education.length - 1 ? s.no_margin : {}),
                    }}>
                    <View style={s.list_item_header}>
                      <Text style={s.list_item_title}>
                        {edu.course} {edu.school && ' | ' + edu.school}
                      </Text>
                      {edu.from && (
                        <Text style={s.duration}>
                          {dateFormatter(edu.from)} -{' '}
                          {edu.to ? dateFormatter(edu.to) : 'Present'}
                        </Text>
                      )}
                    </View>
                    {edu.grade && (
                      <Text
                        style={{
                          ...s.duration,
                          textAlign: 'left',
                          marginBottom: 20,
                        }}>
                        {edu.grade}
                      </Text>
                    )}
                    <Text
                      style={{
                        ...s.list_item_description,
                        ...s.edu_description,
                      }}>
                      {edu.description}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
}

export default WordTemplate;
