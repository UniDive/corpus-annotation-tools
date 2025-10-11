// const jsonUrl = URL REMOVED FOR ANONYMITY;
// let tools = [];
let tools = [              // added for anonymous submission
  {
    "Annotation::Annotation scope": [
      "Free span annotation"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "XML",
      "TSV"
    ],
    "Data support::Integration of other resources": [
      "Audio",
      "Video",
      "Image"
    ],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English",
      "German",
      "French",
      "Chinese"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "GPL-2.0",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software is freely available online (with sign up option)"
    ],
    "Software::Software type": "Desktop-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/Exmaralda-Org/exmaralda",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "Projects": "https://exmaralda.org/en/projects/"
      }
    ],
    "Tool ID::Logo": "",
    "Tool ID::Short description": "EXMARaLDA is a toolset for working with spoken language corpora",
    "Tool ID::Tool name": "EXMARaLDA",
    "Tool ID::Website": "https://www.exmaralda.org",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Table",
      "Musical score visualisation"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "No",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences",
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)",
      "Chains (e.g. coreferences)"
    ],
    "Annotation::Segmentation": [],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "PDF",
      "CONLL-U",
      "XML",
      "TSV"
    ],
    "Data support::Integration of other resources": [
      "Audio",
      "Video",
      "Image",
      "PDF",
      "External databases (e.g. dictionaries)"
    ],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "Apache-2.0",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)",
      "some public instances available"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "INCEpTION also caters to institutional users who need to integrate the tool into their existing infrastructure by supporting e.g. single-sign-on mechanisms, docker-based deployment, a remote API, etc.",
    "Tool ID::Code repository": "https://github.com/inception-project/inception",
    "Tool ID::Developer": "Yes",
    "Tool ID::Logo": "https://inception-project.github.io/assets/img/logo.png",
    "Tool ID::Short description": "INCEpTION is a emantic annotation platform offering intelligent assistance and knowledge management. It caters to a wide range of individual users who find different aspects of the tool useful.",
    "Tool ID::Tool name": "INCEpTION",
    "Tool ID::Website": "https://inception-project.github.io",
    "UD/PARSEME specifics::Consistency check": "partial",
    "UD/PARSEME specifics::Other annotation layers": [
      "relation between spans",
      "chains",
      "document-level"
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [
      "Nested expressions",
      "Overlapping expressions"
    ],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Enhanced dependencies"
    ],
    "User Experience::Agreement calculation": "Yes",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "partial",
    "User Experience::Automatic recommendation": "partial",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data"
    ],
    "User Experience::Comparison of annotations": "partial",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "Yes",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "Yes"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences",
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)",
      "Chains (e.g. coreferences)"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported",
      "The data can be stored with a third party storage platform (e.g. Git repository)"
    ],
    "Data support::Input format": [
      "Raw text",
      "PDF",
      "CONLL-U",
      "XML",
      "TSV"
    ],
    "Data support::Integration of other resources": [
      "Audio",
      "Video",
      "Image",
      "PDF"
    ],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "Apache-2.0",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "",
    "Tool ID::Developer": "No",
    "Tool ID::Logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn%3AANd9GcRwv-OYeU-1T_7Yh_DPJd2QIx9jTJkrafAwiik7kpU4t3poAI0yEAUPceAbfbukMrvbM8W4-XhObr1VMmOc_8puMjiC60CN6w",
    "Tool ID::Short description": "Label Studio is a data labeling tool for all data types (computer vision, natural language processing, speech, voice, and video models)",
    "Tool ID::Tool name": "Label Studio",
    "Tool ID::Website": "https://labelstud.io/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [
      "Text classification",
      "NER"
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [
      "Discontinuous expressions",
      "Nested expressions",
      "Overlapping expressions"
    ],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Table",
      "Raw format (e.g. CONLL-U)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)",
      "Touchscreen"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "Yes",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data",
      "annotators working together on the same shared annotation of the data"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "Yes",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "Yes"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)",
      "Chains (e.g. coreferences)"
    ],
    "Annotation::Segmentation": [],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "CONLL-U",
      "XML"
    ],
    "Data support::Integration of other resources": [
      "External databases (e.g. dictionaries)"
    ],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "GPL-2.0",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Desktop-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/ufal/TrEd",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "Prague Dependency Treebank (PDT)": "https://ufal.mff.cuni.cz/pdt3.0"
      }
    ],
    "Tool ID::Logo": "",
    "Tool ID::Other useful links": [
      {
        "Manual": "https://ufal.mff.cuni.cz/tred/documentation/ar01-toc.html"
      }
    ],
    "Tool ID::Short description": "TrEd is a fully customizable and programmable graphical editor and viewer for tree-like structures.",
    "Tool ID::Tool name": "TrEd",
    "Tool ID::Website": "https://ufal.mff.cuni.cz/tred",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Enhanced dependencies",
      "Empty nodes"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Graphical representation of a tree"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "No"
    ],
    "User Experience::Comparison of annotations": "Yes",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "No",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "partial"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Relations (e.g. dependencies)"
    ],
    "Annotation::Segmentation": [
      "word-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "CONLL-U"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "MIT",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software is freely available online (with sign up option)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/CAMeL-Lab/palmyra",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "CAMeL-treebank": "http://treebank.camel-lab.com/"
      },
      {
        "Arabic Dependency Treeban": "khttp://www.lrec-conf.org/proceedings/lrec2022/pdf/2022.lrec-1.286.pdf"
      }
    ],
    "Tool ID::Logo": "https://camel-lab.github.io/palmyra/fonts/logo.png",
    "Tool ID::Other useful links": [
      {
        "New functionalities": "https://aclanthology.org/2024.lrec-main.1101.pdf"
      },
      {
        "Demo": "https://camel-lab.github.io/palmyra/viewtree.html"
      }
    ],
    "Tool ID::Short description": "PALMYRA is a platform-independent graphical tool for syntactic dependency annotation supporting languages that require complex morphological tokenization.",
    "Tool ID::Tool name": "Palmyra",
    "Tool ID::Website": "https://palmyra.camel-lab.com/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "UPOS",
      "FEATS",
      "XPOS",
      "Basic dependencies",
      "Empty nodes",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Raw format (e.g. CONLL-U)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "Yes",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "No"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "No",
    "User Experience::Querying": "No",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Relations (e.g. dependencies)"
    ],
    "Annotation::Segmentation": [],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "XML",
      "CONLL-X"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "No",
    "Software::License": "not specified",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Desktop-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/attardi/DgAnnotator",
    "Tool ID::Developer": "No",
    "Tool ID::Logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn%3AANd9GcRnnTZWOgkNyroJuQNd4DhyH71CBc2Ghn0Zg1Ysx2lpV_GhSp143U5OFckDLcFNHxAdEs_6WRmFP2SoOkbHUvPThYGDtD5KfVmHt-jx7Qs",
    "Tool ID::Short description": "DgAnnotator is a utility for annotating and visualizing Dependency Graphs for natural language sentences.",
    "Tool ID::Tool name": "DgAnnotator",
    "Tool ID::Website": "http://medialab.di.unipi.it/Project/QA/Parser/DgAnnotator/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "Basic dependencies"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)"
    ],
    "User Experience::Annotation mode": [
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "No",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "No",
    "User Experience::Querying": "No",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences",
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Chains (e.g. coreferences)"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "XML",
      "other"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "Apache-2.0",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/gucorpling/gitdox",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "GUM": "https://gucorpling.org/gum/"
      },
      {
        "CopticScriptorium": "https://datacopticscriptorium.org/"
      }
    ],
    "Tool ID::Logo": "",
    "Tool ID::Other useful links": [
      {
        "Demo": "https://gucorpling.org/gitdox/spannotator.html"
      }
    ],
    "Tool ID::Short description": "GitDox is a version controlled annotation interace for XML and spreadsheet data, as well as nested NER",
    "Tool ID::Tool name": "GitDox",
    "Tool ID::Website": "https://gucorpling.org/gitdox/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [
      "concurrent/conflicting span annotations",
      "nested NER",
      "entity linking."
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [
      "Nested expressions",
      "Overlapping expressions"
    ],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Table",
      "Raw format (e.g. CONLL-U)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "Yes",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data",
      "annotators working together on the same shared annotation of the data"
    ],
    "User Experience::Comparison of annotations": "Yes",
    "User Experience::Keyboard annotation and shortcuts": "No",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "Yes",
    "User Experience::Querying": "No",
    "User Experience::User roles": "Yes"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences",
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "XML",
      "other"
    ],
    "Data support::Integration of other resources": [
      "Audio",
      "Video",
      "Image",
      "PDF",
      "External databases (e.g. dictionaries)"
    ],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "GNU LGPL",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Desktop-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/sillsdev/FieldWorks",
    "Tool ID::Developer": "No",
    "Tool ID::Logo": "https://software.sil.org/wp/wp-content/themes/web-productsites/images/sil_logo_glyph.png",
    "Tool ID::Other useful links": [
      {
        "Training": "https://vimeo.com/showcase/3123523"
      }
    ],
    "Tool ID::Short description": "FLeX is a comprehensive linguistic software tool designed for documenting, analyzing, and managing lexical and textual data, particularly for under-documented languages.",
    "Tool ID::Tool name": "FLeX",
    "Tool ID::Website": "https://software.sil.org/fieldworks/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Table",
      "Raw format (e.g. CONLL-U)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "partial",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [],
    "User Experience::Comparison of annotations": "partial",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "partial",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "CONLL-U",
      "CoNLL-U Plus"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "BSD 3-Clause",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "The tool supports git and provides automatic transliteration of non-Latin scripts into Latin-script, as well as statistics (number/percentage of UPOS, deprels, etc). The tool can be used as a frontend to an parser which returns the result in CoNLL-U format",
    "Tool ID::Code repository": "https://github.com/Orange-Opensource/conllueditor",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "UD_Welsh-CCG": "https://github.com/UniversalDependencies/UD_Welsh-CCG"
      }
    ],
    "Tool ID::Logo": "https://avatars.githubusercontent.com/u/1506386?s=48&v=4",
    "Tool ID::Short description": "CoNLLU-editor is a graphical tool to annotate sentences in dependency syntax",
    "Tool ID::Tool name": "CoNLLU-Editor",
    "Tool ID::Website": "https://github.com/Orange-Opensource/conllueditor",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [
      "BIO-like annotations"
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "Yes",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Enhanced dependencies",
      "Empty nodes",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Table",
      "Raw format (e.g. CONLL-U)",
      "SD",
      "LateX (tikz)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "partial support"
    ],
    "User Experience::Comparison of annotations": "Yes",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "No",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Spans (e.g. names entities)"
    ],
    "Annotation::Segmentation": [],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "CONLL-U",
      "XML",
      "TSV"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "Apache-2.0",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "The tool offers machine-learned automatic tagging suggestions",
    "Tool ID::Code repository": "https://github.com/label-sleuth/label-sleuth",
    "Tool ID::Developer": "No",
    "Tool ID::Logo": "https://www.label-sleuth.org/_static/images/homepage/logo_white_invert.svg",
    "Tool ID::Other useful links": [
      {
        "Paper": "https://arxiv.org/abs/2208.01483"
      }
    ],
    "Tool ID::Short description": "Label Sleuth is an open-source no-code system for text annotation and building text classifiers",
    "Tool ID::Tool name": "Label Sleuth",
    "Tool ID::Website": "https://www.label-sleuth.org/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "Yes",
    "User Experience::Collaborative annotation": [
      "annotators working together on the same shared annotation of the data"
    ],
    "User Experience::Comparison of annotations": "Yes",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "Yes",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "Yes"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)"
    ],
    "Annotation::Segmentation": [],
    "Annotation::Tagset customization": "No",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "CONLL-U"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "other",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/CogComp/talen",
    "Tool ID::Developer": "No",
    "Tool ID::Example projects": [
      {
        "UNER": "https://annotate.universalner.org/"
      }
    ],
    "Tool ID::Logo": "https://github.com/CogComp/talen/blob/master/src/main/resources/static/img/logo-grey-trans.png",
    "Tool ID::Short description": "TALEN is a lightweight web-based tool for annotating word sequences.",
    "Tool ID::Tool name": "TALEN",
    "Tool ID::Website": "https://github.com/CogComp/talen",
    "UD/PARSEME specifics::Consistency check": "partial",
    "UD/PARSEME specifics::Other annotation layers": [
      "NER"
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "UPOS",
      "XPOS",
      "Multi-word tokens",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)"
    ],
    "User Experience::Annotation mode": [
      "Mouse (e.g. drag & drop)",
      "Touchscreen"
    ],
    "User Experience::Automatic pre-annotation": "Yes",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "No",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "No",
    "User Experience::Querying": "No",
    "User Experience::User roles": "Yes"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences",
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Interlinear glossed text annotations"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "No",
    "Software::License": "other",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Desktop-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "",
    "Tool ID::Developer": "No",
    "Tool ID::Logo": "https://software.sil.org/wp/wp-content/themes/web-productsites/images/sil_logo_glyph.png",
    "Tool ID::Other useful links": [
      {
        "Tools": "http://www.fieldlinguiststoolbox.org/"
      }
    ],
    "Tool ID::Short description": "ToolBox is a linguistic data management tool designed for building lexicons, analyzing interlinear texts, and organizing fieldwork data, developed by SIL International.",
    "Tool ID::Tool name": "ToolBox",
    "Tool ID::Website": "https://software.sil.org/toolbox/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Table"
    ],
    "User Experience::Annotation mode": [
      "Keyboard"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "No"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "No",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)"
    ],
    "Annotation::Segmentation": [],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "CONLL-U",
      "other"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "GPL-3.0",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software is freely available online (with sign up option)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/jonorthwash/ud-annotatrix",
    "Tool ID::Developer": "No",
    "Tool ID::Logo": "https://github.com/jonorthwash/ud-annotatrix/blob/master/src/server/public/logo.png",
    "Tool ID::Other useful links": [
      {
        "Paper": "https://aclanthology.org/W17-7604"
      }
    ],
    "Tool ID::Short description": "UD Annotatrix is a client-side, browser-only, language-independent tool for editing dependency trees according to the guidelines established by the Universal Dependencies project.",
    "Tool ID::Tool name": "UD Annotatrix",
    "Tool ID::Website": "https://maryszmary.github.io/ud-annotatrix/standalone/annotator.html",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Enhanced dependencies",
      "Empty nodes"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Table",
      "Raw format (e.g. CONLL-U)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "Yes"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "No",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "No",
    "User Experience::Querying": "No",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences",
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "XML",
      "other",
      "TSV"
    ],
    "Data support::Integration of other resources": [
      "Audio",
      "Video",
      "Image"
    ],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "GPL-3.0",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Desktop-based application",
    "Tool ID::Additional features": "The tools supports synchronization with multimedia content, a customizable annotation workflow and metadata management (IMDI and CMDI)",
    "Tool ID::Code repository": "https://archive.mpi.nl/tla/elan/download",
    "Tool ID::Developer": "No",
    "Tool ID::Logo": "https://archive.mpi.nl/forums/uploads/default/original/1X/b9a095d7450d269ba707171fe5571f248dc99665.svg",
    "Tool ID::Other useful links": [
      {
        "Forum": "https://archive.mpi.nl/forums/"
      }
    ],
    "Tool ID::Short description": "ELAN is a professional tool for the creation, annotation, and analysis of complex multimedia data, enabling time-aligned transcription and linguistic analysis.",
    "Tool ID::Tool name": "ELAN",
    "Tool ID::Website": "https://archive.mpi.nl/tla/elan",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [
      "Time-aligned annotations",
      "multimodal annotations"
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [
      "Discontinuous expressions",
      "Nested expressions",
      "Overlapping expressions"
    ],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Table",
      "CSV"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)",
      "Touchscreen"
    ],
    "User Experience::Automatic pre-annotation": "Yes",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "No",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Relations (e.g. dependencies)",
      "Chains (e.g. coreferences)"
    ],
    "Annotation::Segmentation": [
      "word-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      "CONLL-U"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "MIT",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/furkanakkurt1335/boat",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "UD_Turkish-BOUN": "https://github.com/UniversalDependencies/UD_Turkish-BOUN"
      }
    ],
    "Tool ID::Logo": "",
    "Tool ID::Short description": "BoAT (Boğaziçi University Annotation Tool) is a collaborative grammatical annotation tool.",
    "Tool ID::Tool name": "BoAT",
    "Tool ID::Website": "https://github.com/furkanakkurt1335/boat",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "Yes",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Basic dependencies",
      "Enhanced dependencies",
      "Empty nodes",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "partial",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Table"
    ],
    "User Experience::Annotation mode": [
      "Keyboard"
    ],
    "User Experience::Automatic pre-annotation": "tokenization",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data"
    ],
    "User Experience::Comparison of annotations": "Yes",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "partial",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)"
    ],
    "Annotation::Segmentation": [],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "CONLL-U",
      "XML"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "Apache-2.0",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Desktop-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "",
    "Tool ID::Developer": "Yes",
    "Tool ID::Logo": "",
    "Tool ID::Short description": "Q-CAT is a tool for manual linguistic annotation of corpora, which also enables advanced queries on top of these annotations.",
    "Tool ID::Tool name": "Q-CAT",
    "Tool ID::Website": "http://hdl.handle.net/11356/1844",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "Multi-word tokens",
      "Basic dependencies"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "No",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "No",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)"
    ],
    "Annotation::Segmentation": [
      "word-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "CONLL-U"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "CC_BY",
    "Software::Offline usage (for web-based applications)": "Yes",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software is freely available online (without sign up option )"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/parameshkrishnaa/PLURAL-conllu-annotator",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "UD for Tamil": "https://universaldependencies.org/ta/index.html"
      },
      {
        "UD_Telugu-MTG": "https://github.com/UniversalDependencies/UD_Telugu-MTG"
      }
    ],
    "Tool ID::Logo": "https://plural.iiit.ac.in/conllu-assets/static/media/IIITH.3e6a0240528e48ab6511.png",
    "Tool ID::Short description": "PLURAL-conllu-annotator allows treatement of linguistic rich data",
    "Tool ID::Tool name": "PLURAL",
    "Tool ID::Website": "https://plural.iiit.ac.in/conllu-annotator",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [
      "NIL"
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "Yes",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Enhanced dependencies",
      "Empty nodes",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Raw format (e.g. CONLL-U)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "Yes",
    "User Experience::Collaborative annotation": [
      "No"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "No",
    "User Experience::Querying": "No",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)",
      "Chains (e.g. coreferences)"
    ],
    "Annotation::Segmentation": [
      "word-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported",
      "The data can be stored with a third party storage platform (e.g. Git repository)"
    ],
    "Data support::Input format": [
      "Raw text",
      "CONLL-U",
      "XML",
      "TSV",
      "other"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Legacy",
    "Software::License": "GPL-3.0",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/proycon/flat",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "PARSEME": "https://gitlab.com/parseme"
      },
      {
        "Pre-Modern Slavic Texts": "https://aclanthology.org/2024.lrec-main.184/"
      }
    ],
    "Tool ID::Logo": "http://proycon.github.io/folia/style/icon.png",
    "Tool ID::Other useful links": [
      {
        "Tools": "http://proycon.github.io/folia/"
      }
    ],
    "Tool ID::Short description": "Flat (FoLiA Linguistic Annotation Tool) is a web-based linguistic annotation environment based around the FoLiA format, a rich XML-based format for linguistic annotation.",
    "Tool ID::Tool name": "FLAT",
    "Tool ID::Website": "https://github.com/proycon/flat",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [
      "Discontinuous expressions",
      "Nested expressions",
      "Overlapping expressions"
    ],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [],
    "User Experience::Annotation mode": [
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "No",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data"
    ],
    "User Experience::Comparison of annotations": "No",
    "User Experience::Keyboard annotation and shortcuts": "No",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "partial",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "Yes"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences",
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)",
      "Chains (e.g. coreferences)"
    ],
    "Annotation::Segmentation": [],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported"
    ],
    "Data support::Input format": [
      "Raw text",
      ".txt+.ann"
    ],
    "Data support::Integration of other resources": [
      "External databases (e.g. dictionaries)"
    ],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "No",
    "Software::License": "MIT",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software should be run by the user (own machine/server)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "",
    "Tool ID::Code repository": "https://github.com/nlplab/brat",
    "Tool ID::Developer": "No",
    "Tool ID::Example projects": [
      {
        "Examples": "https://brat.nlplab.org/examples.html"
      }
    ],
    "Tool ID::Logo": "",
    "Tool ID::Short description": "brat rapid annotation tool is a web-based tool for text annotation. brat is designed in particular for structured annotation, where the notes are not freeform text but have a fixed form that can be automatically processed and interpreted by a computer.",
    "Tool ID::Tool name": "brat",
    "Tool ID::Website": "http://brat.nlplab.org/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [
      "events",
      "relations",
      "chains",
      "attributes",
      "normalization"
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [
      "Discontinuous expressions",
      "Nested expressions",
      "Overlapping expressions"
    ],
    "UD/PARSEME specifics::UD validation": "No",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Basic dependencies",
      "Empty nodes"
    ],
    "User Experience::Agreement calculation": "No",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "Yes",
    "User Experience::Automatic recommendation": "No",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data"
    ],
    "User Experience::Comparison of annotations": "Yes",
    "User Experience::Keyboard annotation and shortcuts": "No",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "No",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "No"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences",
      "Annotation across sentences",
      "Annotation of full sentences / paragraphs / documents"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tag morphological features)",
      "Spans (e.g. names entities)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)",
      "Chains (e.g. coreferences)"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported",
      "The data can be stored with a third party storage platform (e.g. Git repository)"
    ],
    "Data support::Input format": [
      "Raw text",
      "CONLL-U",
      "XML",
      "TSV"
    ],
    "Data support::Integration of other resources": [
      "External databases (e.g. dictionaries)"
    ],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "Apache-2.0",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software is available upon request (the user should ask to get an account)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "WebAnno supports a rich set of features including customizable annotation layers, integration with external data sources, support for multiple annotators, and visualization of annotated data It also supports automatic pre-annotation and inter-annotator agreement calculation",
    "Tool ID::Code repository": "https://github.com/webanno/webanno",
    "Tool ID::Developer": "No",
    "Tool ID::Logo": "https://webanno.github.io/webanno/assets/img/logo.png",
    "Tool ID::Short description": "WebAnno is a web-based collaborative tool for linguistic annotation that supports various annotation tasks, including POS tagging, dependency parsing, and coreference resolution. It provides collaborative features and works well with formats like CoNLL-U.",
    "Tool ID::Tool name": "WebAnno",
    "Tool ID::Website": "https://webanno.github.io/webanno/",
    "UD/PARSEME specifics::Consistency check": "Yes",
    "UD/PARSEME specifics::Other annotation layers": [
      "NER",
      "coreference",
      "MWE"
    ],
    "UD/PARSEME specifics::PARSEME-specific annotations": [
      "Discontinuous expressions",
      "Nested expressions",
      "Overlapping expressions"
    ],
    "UD/PARSEME specifics::UD validation": "Yes",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Enhanced dependencies",
      "Empty nodes",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "Yes",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Table",
      "Raw format (e.g. CONLL-U)"
    ],
    "User Experience::Annotation mode": [
      "Keyboard",
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "Yes",
    "User Experience::Automatic recommendation": "Yes",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data",
      "annotators working together on the same shared annotation of the data"
    ],
    "User Experience::Comparison of annotations": "Yes",
    "User Experience::Keyboard annotation and shortcuts": "Yes",
    "User Experience::Mass editing": "No",
    "User Experience::Project management": "Yes",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "Yes"
  },
  {
    "Annotation::Annotation scope": [
      "Annotation inside sentences"
    ],
    "Annotation::Annotation types": [
      "Tokens (e.g. part-of-speech tags)",
      "Multi-tokens (e.g. multi-word expressions)",
      "Relations (e.g. dependencies)"
    ],
    "Annotation::Segmentation": [
      "word-level",
      "sentence-level"
    ],
    "Annotation::Tagset customization": "Yes",
    "Data support::Data export": [
      "The data can be exported",
      "The data can be stored with a third party storage platform (e.g. Git repository)"
    ],
    "Data support::Input format": [
      "Raw text",
      "CONLL-U"
    ],
    "Data support::Integration of other resources": [],
    "Diversity features::Diversity features": [
      "Language-independence",
      "Writing script support",
      "LTR",
      "RTL",
      "unicode support"
    ],
    "Diversity features::Language of the interface": [
      "English",
      "French"
    ],
    "Software::Active maintenance": "Yes",
    "Software::License": "AGPL-3.0",
    "Software::Offline usage (for web-based applications)": "No",
    "Software::Operating system": [
      "Windows",
      "Mac OS",
      "Linux"
    ],
    "Software::Software availability": [
      "The software is freely available online (with sign up option)"
    ],
    "Software::Software type": "Web-based application",
    "Tool ID::Additional features": "ArboratorGrew can be used also to teach syntax: users can create exercises with different levels of complexity and export results",
    "Tool ID::Code repository": "https://github.com/Arborator",
    "Tool ID::Developer": "Yes",
    "Tool ID::Example projects": [
      {
        "Masakhane-Igbo": "https://arboratorgrew.elizia.net/#/projects/Masakhane-Igbo"
      }
    ],
    "Tool ID::Logo": "https://arborator.grew.fr/svg/arborator.grew.svg",
    "Tool ID::Other useful links": [
      {
        "Documentation": "https://arborator.github.io/arborator-documentation/"
      }
    ],
    "Tool ID::Short description": "A collaborative annotation tool for the treebank developement. It allows the creation of lexicons from annotated data. To ensure effective collaboration, ArboratorGrew provides a tag system.",
    "Tool ID::Tool name": "ArboratorGrew",
    "Tool ID::Website": "https://arborator.grew.fr/",
    "UD/PARSEME specifics::Consistency check": "No",
    "UD/PARSEME specifics::Other annotation layers": [],
    "UD/PARSEME specifics::PARSEME-specific annotations": [],
    "UD/PARSEME specifics::UD validation": "Yes",
    "UD/PARSEME specifics::UD-specific annotations": [
      "Lemmas",
      "UPOS",
      "FEATS",
      "XPOS",
      "Multi-word tokens",
      "Basic dependencies",
      "Metadata"
    ],
    "User Experience::Agreement calculation": "Yes",
    "User Experience::Annotation display": [
      "Image (e.g. a graph or coloured text)",
      "Table",
      "Raw format (e.g. CONLL-U)"
    ],
    "User Experience::Annotation mode": [
      "Mouse (e.g. drag & drop)"
    ],
    "User Experience::Automatic pre-annotation": "Yes",
    "User Experience::Automatic recommendation": "Yes",
    "User Experience::Collaborative annotation": [
      "annotators working independently on their own annotations of the same data"
    ],
    "User Experience::Comparison of annotations": "Yes",
    "User Experience::Keyboard annotation and shortcuts": "No",
    "User Experience::Mass editing": "Yes",
    "User Experience::Project management": "Yes",
    "User Experience::Querying": "Yes",
    "User Experience::User roles": "Yes"
  }
]
let tools_dict = {};
let current_selection = {};
let current_tool;
let active_selection = false;

let excluded_filters = ["Other annotation layers"];

function filterTools (){
	// Find matching tools
	const matchingTools = tools.filter(tool => {
		let match = true;
		Object.entries(current_selection).forEach(([feature, questionDict]) => {
			Object.entries(questionDict).forEach(([question, values]) => {
				// Collect all selected values for this question
				const selectedValues = Object.entries(values)
					.filter(([_, isSelected]) => isSelected)
					.map(([value]) => value);

				if (selectedValues.length > 0) {
					const key = `${feature}::${question}`;
					let toolValues = [];
					if (Array.isArray(tool[key])) {
						toolValues = tool[key];
					} else if (tool[key]) {
						toolValues = [tool[key]];
					}
					// Tool matches if it has ANY of the selected values
					const hasAny = selectedValues.some(val => toolValues.includes(val));
					if (!hasAny) {
						match = false;
					}
				}
			});
		});
		return match;
	});

	// Reorder cards: matching first, others after
	const toolsContainer = document.querySelector('.tools');
	const allCards = Array.from(toolsContainer.querySelectorAll('.card'));
	allCards.forEach(card => {
		card.classList.remove('filtered');
		card.classList.remove('disabled');
		card.style.opacity = '1';
		card.style.pointerEvents = 'auto';
	});

	allCards.forEach(card => {
		const toolName = card.dataset.value;
		const isMatch = matchingTools.some(t => t["Tool ID::Tool name"] === toolName);
		if (isMatch) {
			card.classList.add('filtered');
			card.style.order = 0;
			card.style.opacity = '1';
			card.style.pointerEvents = 'auto';
		} else {
			card.classList.remove('filtered');
			card.style.order = 1;
			card.style.opacity = '0.4';
			// card.style.pointerEvents = 'none';
		}
	});
	return matchingTools;
}

function updateFeatures(matchingTools) {

	// Update counts and value states
	document.querySelectorAll('.feature-question').forEach(featureQuestion => {
		const featureCat = featureQuestion.querySelector('.value')?.getAttribute('data-category');
		const questionName = featureQuestion.querySelector('.value')?.getAttribute('data-feature');
		if (!featureCat || !questionName) return;

		// Recalculate counts for this question
		const valueCounts = {};
		matchingTools.forEach(tool => {
			const key = `${featureCat}::${questionName}`;
			let vals = [];
			if (Array.isArray(tool[key])) {
				vals = tool[key];
			} else if (tool[key]) {
				vals = [tool[key]];
			}
			vals.forEach(v => {
				if (v && v.trim() !== "") {
					valueCounts[v] = (valueCounts[v] || 0) + 1;
				}
			});
		});

		// Update UI for each value/count pair
		featureQuestion.querySelectorAll('span').forEach(pairSpan => {
			const valueElem = pairSpan.querySelector('.value');
			const countElem = pairSpan.querySelector('.count');
			if (!valueElem || !countElem) return;
			const val = valueElem.getAttribute('data-value');
			const overall_count = valueElem.getAttribute('overall-count');
			const current_count = valueCounts[val] || 0;

			valueElem.setAttribute('current-count', current_count);
			countElem.textContent = `${current_count}/${overall_count}`;

			if (current_selection[featureCat][questionName][val]) {
				valueElem.classList.add('selected');
				valueElem.classList.remove('disabled');
			} else {
				valueElem.classList.add('disabled');
				valueElem.classList.remove('selected');
			}
		});
	});


}

function highlightCardFeatures(tool) {
	// Remove previous highlights
	document.querySelectorAll('.feature-question .value').forEach(valueElem => {
		valueElem.classList.remove('card-highlight');
	});

	// Find the tool object
	if (!tool) return;

	Object.entries(tool).forEach(([key, value]) => {
		if (!key.startsWith('Tool ID::')) {
			const [prefix, question] = key.split('::');
			let values = Array.isArray(value) ? value : [value];
			values.forEach(val => {
				if (val && val.trim() !== "") {
					// Highlight the relevant value
					document.querySelectorAll(
						`.feature-question .value[data-category="${prefix}"][data-feature="${question}"][data-value="${val}"]`
					).forEach(elem => {
						elem.classList.add('card-highlight');
					});
				}
			});
		}
	});
}

function removeCardHighlights() {
	document.querySelectorAll('.feature-question .value').forEach(valueElem => {
		valueElem.classList.remove('card-highlight');
	});
}

function highlightFeatures() {
	expandAllFeatureSections();
	const expandedCard = document.querySelector('.card.expanded');
	if (!expandedCard) return;

	const toolName = expandedCard.dataset.value;
	const tool = tools.find(t => t["Tool ID::Tool name"] === toolName);
	if (!tool) return;

	Object.entries(tool).forEach(([key, value]) => {
		if (!key.startsWith('Tool ID::')) {
			const [prefix, question] = key.split('::');
			let values = Array.isArray(value) ? value : [value];
			values.forEach(val => {
				if (val && val.trim() !== "") {
					current_selection[prefix][question][val] = true;
				}
			});
		}
	});

	let matchingTools = filterTools();
	updateFeatures(matchingTools);
}

function expandAllFeatureSections() {
	document.querySelectorAll('.feature-section').forEach(section => {
		section.classList.remove('collapsed');
	});
}

function collapse() {
	document.querySelectorAll('.card.expanded').forEach(card => {
		card.classList.remove('expanded');
		// Hide image and details
		const img = card.querySelector('img');
		if (img) img.style.display = 'none';
		const details = card.querySelector('.details');
		if (details) details.style.display = 'none';
	});

	document.querySelectorAll('.feature-question span').forEach(pairSpan => {
		pairSpan.style.display = 'inline-flex';
	});
}

function populateViz(tool) {
	// console.log(tool);
	const toolsVisualization = document.querySelector('.tools-viz');
	toolsVisualization.innerHTML = '';

	const header = document.createElement('div');
	header.className = 'card-header';

	// Title
	const h3 = document.createElement('h3');
	const link = document.createElement('a');
	link.href = tool["Tool ID::Website"];
	link.target = "_blank";
	link.textContent = tool["Tool ID::Tool name"];
	h3.appendChild(link);
	header.appendChild(h3);

	// Logo
	if (tool["Tool ID::Logo"]) {
		const img = document.createElement('img');
		img.src = tool["Tool ID::Logo"];
		img.alt = `${tool["Tool ID::Tool name"]} Logo`;
		// img.style.display = 'none';
		header.appendChild(img);
	}



	toolsVisualization.appendChild(header);

	const shortDesc = document.createElement("div");
	shortDesc.className = "short-description";

	const description = document.createElement("p");
	description.innerHTML = `${tool["Tool ID::Short description"] || ''}`;
	shortDesc.appendChild(description);
	toolsVisualization.appendChild(shortDesc);

	if (tool['Tool ID::Code repository'] !== '') {
		const form = document.createElement('form');
		form.action = tool['Tool ID::Code repository'];
		form.method = "get";
		form.target = "_blank";
		const repository = document.createElement('button');
		repository.className = 'repo';
		repository.setAttribute('aria-label', 'Code repository');
		repository.textContent = "Code repository"
		form.appendChild(repository)
		shortDesc.appendChild(form);
	}



	// Details
	const details = document.createElement('div');
	details.className = 'details';

	const infoBox = document.createElement('div');
	infoBox.className = 'info-box';




	const add_features = document.createElement("p");
	if (tool["Tool ID::Information provider"] == 'Developer') {
		add_features.innerHTML = `${tool["Tool ID::Additional features"] || ""}. Information provided by tool developer.`;
	} else {
		add_features.innerHTML = `${tool["Tool ID::Additional features"] || ""}.`
	}
	infoBox.appendChild(add_features);

	// Useful links
	console.log(tool["Tool ID::Other useful links"]);
	console.log(tool)
	if (tool["Tool ID::Other useful links"] && Array.isArray(tool["Tool ID::Other useful links"])) {
		const projectsSection = document.createElement('div');
		projectsSection.className = 'example-projects';
		projectsSection.innerHTML = '<h4>Other useful links</h4>';
		const example_list = document.createElement('ul');
		tool["Tool ID::Other useful links"].forEach((tool_link) => {
			Object.entries(tool_link).forEach(([link_key, link_ref]) => {
				// console.log(link_key, link_ref);
				const listElem = document.createElement('li');
				const linkElem = document.createElement('a');
				linkElem.href = link_ref;
				linkElem.textContent = link_key;
				linkElem.target = '_blank';
				listElem.appendChild(linkElem);
				example_list.appendChild(listElem);
			});
		});
		projectsSection.appendChild(example_list);
		infoBox.appendChild(projectsSection);
	}

	if (tool["Tool ID::Example projects"] && Array.isArray(tool["Tool ID::Example projects"])) {
		const projectsSection = document.createElement('div');
		projectsSection.className = 'example-projects';
		projectsSection.innerHTML = '<h4>Example projects</h4>';
		const example_list = document.createElement('ul');
		tool["Tool ID::Example projects"].forEach((tool_link) => {
			Object.entries(tool_link).forEach(([link_key, link_ref]) => {
				// console.log(link_key, link_ref);
				const listElem = document.createElement('li');
				const linkElem = document.createElement('a');
				linkElem.href = link_ref;
				linkElem.textContent = link_key;
				linkElem.target = '_blank';
				listElem.appendChild(linkElem);
				example_list.appendChild(listElem);
			});
		});
		projectsSection.appendChild(example_list);
		infoBox.appendChild(projectsSection);
	}
	details.appendChild(infoBox);
	// toolsVisualization.appendChild(details);

	// Info box with features (right side of card)
	const featuresBox = document.createElement('div');
	featuresBox.className = 'features-box';
	// featuresBox.style.flexDirection = 'column';
	// featuresBox.style.alignItems = 'flex-end';

	Object.entries(tool).forEach(([key, value]) => {
		if (!key.startsWith('Tool ID::')) {
			const [prefix, question] = key.split('::');
			if (!question) return;
			// Create a container for value/count pairs
			const featureRow = document.createElement('div');
			featureRow.style.display = 'flex';
			featureRow.style.flexWrap = 'wrap';
	//         // featureRow.style.marginBottom = '4px';

			// Handle array or single value
			let values = Array.isArray(value) ? value : [value];
			values.forEach(val => {
				if (val && val.trim() !== "") {
					const pairSpan = document.createElement('span');
					pairSpan.style.display = 'inline-flex';
					pairSpan.style.alignItems = 'center';

					const valueP = document.createElement('p');
					valueP.className = 'tool-value';
					valueP.textContent = val;

					pairSpan.appendChild(valueP);
					featureRow.appendChild(pairSpan);
				}
			});

			// Add question label and values
			if (featureRow.childNodes.length > 0) {
				const label = document.createElement('p');
				label.classList.add("tool-question")
				label.textContent = `${question}: `;
				// label.style.fontWeight = 'bold';
				// label.style.marginRight = '6px';
				featureRow.insertBefore(label, featureRow.firstChild);
				featuresBox.appendChild(featureRow);
			}
		}
	});
	details.appendChild(featuresBox);
	// details.appendChild(infoBox);

	toolsVisualization.appendChild(details);

}

function buildTools() {

	const toolsContainer = document.querySelector('.tools');
	toolsContainer.innerHTML = '';

	const toolsVisualization = document.querySelector('.tools-viz');
	toolsVisualization.innerHTML = '';

	tools.forEach(tool => {
		const card = document.createElement('div');
		card.className = 'card';
		card.dataset.value = tool["Tool ID::Tool name"];

		// Card header
		const header = document.createElement('div');
		header.className = 'card-header';

		// Title
		const h3 = document.createElement('h3');
		h3.textContent = tool["Tool ID::Tool name"];
		// const link = document.createElement('a');
		// link.href = tool["Tool ID::Website"];
		// link.target = "_blank";
		// link.textContent = tool["Tool ID::Tool name"];
		// link.style.color = 'inherit';
		// h3.appendChild(link);
		header.appendChild(h3);

		// Plus/minus buttons
		const plus = document.createElement('button');
		plus.className = 'plus';
		plus.setAttribute('aria-label', 'Expand details');
		plus.textContent = '+';
		header.appendChild(plus);

		const minus = document.createElement('button');
		minus.className = 'minus';
		minus.setAttribute('aria-label', 'Collapse details');
		minus.textContent = '−';
		// minus.style.display = 'none';
		header.appendChild(minus);

		plus.addEventListener('click', function(e) {

			// active_selection = true;
			// console.log(e);
			e.stopPropagation();
			collapse();
			highlightCardFeatures(tool); // highlight relevant features
			populateViz(tool);

			let button_plus = card.querySelector('.plus');
			let button_minus = card.querySelector('.minus');
			button_plus.style.display = 'none';
			button_minus.style.display = 'inline-flex';

			let cards = document.querySelectorAll(".card");
			cards.forEach(other_card => {

				if (other_card.getAttribute('data-value') !== card.getAttribute('data-value'))  {
					let button_plus = other_card.querySelector('.plus');
					let button_minus = other_card.querySelector('.minus');
					button_plus.style.display = 'inline-flex';
					button_minus.style.display = 'none';
				}
			})

		});

		minus.addEventListener('click', function(e) {
			// active_selection = false;
			e.stopPropagation();
			removeCardHighlights(); // remove highlights
			toolsVisualization.innerHTML = '';

			let button_plus = card.querySelector('.plus');
			let button_minus = card.querySelector('.minus');
			button_plus.style.display = 'inline-flex';
			button_minus.style.display = 'none';

			// let cards = document.querySelectorAll(".card");
			// cards.forEach(other_card => {

			//     if (other_card.getAttribute('data-value') !== card.getAttribute('data-value'))  {
			//         let button_plus = other_card.querySelector('.plus');
			//         let button_minus = other_card.querySelector('.minus');
			//         button_plus.style.display = 'none';
			//         button_minus.style.display = 'inline-flex';
			//     }
			// })
		});

		card.addEventListener('mouseover', function(e) {
			// console.log(card);
			e.stopPropagation();
			let button = card.querySelector('.plus');
			// console.log(button);
			button.classList.add("orange-plus");
			// console.log(button);
		});

		card.addEventListener('mouseout', function(e) {
			// console.log(card);
			e.stopPropagation();
			let button = card.querySelector('.plus');
			// console.log(button);
			button.classList.remove("orange-plus");
			// console.log(button);
		});

		card.appendChild(header);

		toolsContainer.appendChild(card);
	});
}

function buildSelections() {
	const questionValues = {};   // { prefix: { question: Set of values } }
	const questionValues_counts = {};

	tools.forEach(tool => {
		Object.entries(tool).forEach(([key, value]) => {
			const [prefix, question] = key.split('::');
			if (prefix !== 'Tool ID' && question && !excluded_filters.includes(question)) {

				// Collect values for each question
				if (!questionValues[prefix]){
					questionValues[prefix] = {};
					questionValues_counts[prefix] = {};
					current_selection[prefix] = {};
				}

				if (!questionValues[prefix][question]) {
					questionValues[prefix][question] = new Set();
					questionValues_counts[prefix][question] = {};
					current_selection[prefix][question] = {};
				}

				// Handle array or single value
				if (Array.isArray(value)) {
					value.forEach(v => {
						if (v && v.trim() !== ""){
							questionValues[prefix][question].add(v);
							if (!questionValues_counts[prefix][question][v]) {
								questionValues_counts[prefix][question][v] = 0;
								current_selection[prefix][question][v] = false;
							}
							questionValues_counts[prefix][question][v] += 1;
						}
					});
				} else if (value && value.trim() !== "") {
					questionValues[prefix][question].add(value);
					if (!questionValues_counts[prefix][question][value]) {
						questionValues_counts[prefix][question][value] = 0;
						current_selection[prefix][question][value] = false;
					}
					questionValues_counts[prefix][question][value] += 1;
				}
			}
		});
	});

	const featuresTable = document.querySelector('.features-table');
	featuresTable.innerHTML = '';

	Object.entries(questionValues_counts).forEach(([feature, ValueSet])=> {

		const featureSection = document.createElement('div');
		featureSection.className = 'feature-section';
		featureSection.classList.add('collapsed');
		featureSection.innerHTML = `<h3>${feature || '#'} <span class="toggle-arrow">&#9662;</span></h3>`;

		Object.entries(ValueSet).forEach(([question, values]) => {
			const featureQuestion = document.createElement('div');
			featureQuestion.className = 'feature-question';
			featureQuestion.innerHTML = `<h4>${question}</h4>`;

			Object.entries(values).forEach(([value, count]) => {
				const pairSpan = document.createElement('span');
				pairSpan.style.display = 'inline-flex';
				pairSpan.style.alignItems = 'center';
				pairSpan.style.marginRight = '8px';

				const valueP = document.createElement('p');
				valueP.className = 'value';
				valueP.setAttribute('data-category', feature);
				valueP.setAttribute('data-feature', question);
				valueP.setAttribute('data-value', value);
				valueP.setAttribute('data-type', 'value');
				valueP.setAttribute('overall-count', count);
				valueP.setAttribute('current-count', count);
				valueP.textContent = value;
				valueP.classList.add('disabled')

				const countP = document.createElement('p');
				countP.className = 'count';
				countP.setAttribute('data-category', feature);
				countP.setAttribute('data-feature', question);
				countP.setAttribute('data-value', value);
				countP.setAttribute('data-type', 'count');
				countP.textContent = count;

				pairSpan.appendChild(valueP);
				pairSpan.appendChild(countP);
				featureQuestion.appendChild(pairSpan);
			});
			featureSection.appendChild(featureQuestion);
		});
		featuresTable.appendChild(featureSection);
	});

	document.querySelectorAll('.feature-section h3').forEach(header => {
		header.addEventListener('click', function() {
			const section = header.parentElement;
			section.classList.toggle('collapsed');
		});
	});


	document.querySelectorAll('.feature-question .value').forEach(function(valueElem) {
		valueElem.addEventListener('click', function() {
			const feature = valueElem.getAttribute('data-category');
			const question = valueElem.getAttribute('data-feature');
			const value = valueElem.getAttribute('data-value');

			// Toggle selection regardless of current state
			current_selection[feature][question][value] = !current_selection[feature][question][value];
			// console.log(current_selection[feature][question][value]);

			let matchingTools = filterTools();
			updateFeatures(matchingTools);
		});
	});


}

async function buildUI() {
	// Load the JSON data
	// const response = await fetch(jsonUrl);
	// tools = await response.json()


	buildTools();
	buildSelections();
}

function fixResizer () {
	// Horizontal resizer (top/bottom) in LEFT area
	const split = document.getElementsByClassName('split')[0];
	const sepY = document.getElementById('separator');
	const minPanel = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--min-panel')) || 80;
	const sepSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--separator-size')) || 8;

	function clampTop(px) {
	const total = split.clientHeight;
	const maxTop = total - sepSize - minPanel;
	const minTop = minPanel;
	return Math.max(minTop, Math.min(px, maxTop));
	}
	function setTop(px) {
	const clamped = clampTop(px);
	document.documentElement.style.setProperty('--top', clamped + 'px');
	}
	function getTop() {
	const v = getComputedStyle(document.documentElement).getPropertyValue('--top').trim();
	return v.endsWith('vh') ? (parseFloat(v) / 100) * window.innerHeight : parseFloat(v);
	}

	let draggingY = false;
	function onPointerDownY(e) {
	draggingY = true;
	document.body.classList.add('dragging-y');
	window.addEventListener('pointermove', onPointerMoveY);
	window.addEventListener('pointerup', onPointerUpY, { once: true });
	}
	function onPointerMoveY(e) {
	if (!draggingY) return;
	const rect = split.getBoundingClientRect();
	const y = e.clientY - rect.top;
	setTop(y);
	}
	function onPointerUpY() {
	draggingY = false;
	document.body.classList.remove('dragging-y');
	window.removeEventListener('pointermove', onPointerMoveY);
	}
	sepY.addEventListener('pointerdown', onPointerDownY);
	window.addEventListener('resize', () => setTop(getTop()));

	// Vertical resizer (left/right) in OUTER container
	const container = document.getElementsByClassName('container')[0];
	const sepX = document.getElementById('separator2');
	const vSepSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--v-separator-size')) || 8;
	const minSide = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--min-side')) || 120;

	function clampLeft(px) {
	const total = container.clientWidth;
	const maxLeft = total - vSepSize - minSide;
	const minLeft = minSide;
	return Math.max(minLeft, Math.min(px, maxLeft));
	}
	function setLeft(px) {
	const clamped = clampLeft(px);
	document.documentElement.style.setProperty('--left', clamped + 'px');
	}
	function getLeft() {
	const v = getComputedStyle(document.documentElement).getPropertyValue('--left').trim();
	return v.endsWith('vw') ? (parseFloat(v) / 100) * window.innerWidth : parseFloat(v);
	}

	let draggingX = false;
	function onPointerDownX(e) {
	draggingX = true;
	document.body.classList.add('dragging-x');
	window.addEventListener('pointermove', onPointerMoveX);
	window.addEventListener('pointerup', onPointerUpX, { once: true });
	}
	function onPointerMoveX(e) {
	if (!draggingX) return;
	const rect = container.getBoundingClientRect();
	const x = e.clientX - rect.left;
	setLeft(x);
	}
	function onPointerUpX() {
	draggingX = false;
	document.body.classList.remove('dragging-x');
	window.removeEventListener('pointermove', onPointerMoveX);
	}
	sepX.addEventListener('pointerdown', onPointerDownX);
	window.addEventListener('resize', () => setLeft(getLeft()));
}


// ON LOAD
document.addEventListener("DOMContentLoaded", () => {

	const instructions = document.getElementById('instructions');
    const collapseBtn = document.getElementById('collapse-instructions');
    collapseBtn.addEventListener('click', function() {
        instructions.classList.toggle('collapsed');
        collapseBtn.textContent = instructions.classList.contains('collapsed') ? '+' : '−';
    });

	buildUI();

	// Collapse expanded card when clicking outside
	document.querySelectorAll(".sidebar")[0].addEventListener('click', function(e) {
		const expandedCard = document.querySelector('.card.expanded');
		if (expandedCard && !expandedCard.contains(e.target)) {
			collapse();
		}
	});

	document.querySelector('.reset-btn').addEventListener('click', buildUI);

	fixResizer();
});