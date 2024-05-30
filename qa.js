import { openai } from './openai';
import { Document } from 'langchain/document';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { CharacterTextSplitter } from 'langchain/text_splitter';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf.cjs';
import { YoutubeLoader } from 'langchain/document_loaders/web/youtube';

const question = process.argv[2] || 'hi';
const video = `https://youtu.be/zR_iuq2evXo?si=cG8rODgRgXOx9_Cn`

export const createStore = (docs) => MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings({

}))