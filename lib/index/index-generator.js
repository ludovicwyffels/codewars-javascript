const { writeFile, readdirSync } = require('fs');

const indexGenerator = (kyu) => {
  const url = `https://github.com/ludovicwyffels/codewars-katas/tree/master/${kyu}/`;

  try {
    const markdown = (source) =>
      readdirSync(source)
        .sort((a, b) => a.localeCompare(b))
        .map((name, index) => {
          const bullet = index % 2 === 0 ? '*' : '-';
          return `${bullet} [${name}](${url}${encodeURIComponent(name)})`;
        })
        .join('\n\n');

    const kyuIndex = markdown(`./${kyu}`);

    writeFile(`./lib/index/${kyu}.md`, kyuIndex, (err) => {
      if (err) throw err;
      console.log(`${kyu.split('-').join(' ')} index generated`);
    });
  } catch (e) {
    console.error(e.message);
  }
};

const generateAllIndex = () => {
  const katas = [
    '8-kyu',
    '7-kyu',
    '6-kyu',
    '5-kyu',
    '4-kyu',
    '3-kyu',
    '2-kyu',
    '1-kyu'
  ];
  katas.forEach((kata) => indexGenerator(kata));
};

generateAllIndex();
