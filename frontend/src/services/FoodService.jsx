import { sample_data, sample_tags } from "../data";

export const getAll = async () => sample_data;

export const search = async (searchTerm) =>
  sample_data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getAllTags = async () => sample_tags;

export const getAllByTag = async (tag) => {
  if (tag === "All") return getAll();
  return sample_data.filter((item) => item.tags?.includes(tag));
};

export const getById = async (foodId) =>
  sample_data.find((item) => item.id == foodId);
