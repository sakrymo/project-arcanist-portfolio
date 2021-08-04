-- UPDATE FOR NEW FUSION PROJECT STRUCTURE

-- for i, tool in pairs(comp:GetToolList()) do
--   print(tool.Clip.value)
-- end


-- for k,v in ipairs(Loader1.Clip:GetAttrs()) do print(v) end
-- for k,v in ipairs(Loader1:GetAttrs()) do print(v) end


-- GET CLIP NAME
-- Loader1:GetAttrs("TOOLST_Clip_Name")[1]

-- for k, v in pairs(comp:GetToolList(false,"Loader")) do
--   print(v:GetAttrs("TOOLST_Clip_Name")[1])
-- end

-- print(string.match("comp:/PSD/Template/ButtonLeft.psd","..."))
-- print(string.match("comp:/PSD/Template/ButtonLeft.psd","comp:/.*/"))

pathName = Loader1:GetAttrs("TOOLST_Clip_Name")[1]

oldFolder = string.match("comp:/PSD/Template/ButtonLeft.psd","comp:/PSD/(.*)/")

newFolder = SetLoaderDir.PSDSubfolder[1]

string.gsub("comp:/PSD/Template/ButtonLeft.psd", newFolder, "test")

for k,tool in pairs(comp:GetToolList(false,"Loader")) do
  fullPath = tool:GetAttrs("TOOLST_Clip_Name")[1]
  oldFolder = string.match(fullPath,"comp:[/\\]PSD[/\\](.*)[/\\]")
  newFolder = SetLoaderDir.PSDSubfolder[1]

  print("full path: " .. fullPath)
  print("old folder: " .. oldFolder)
  print("new folder: " .. newFolder)
  tool.Clip = string.gsub(fullPath, oldFolder, newFolder)
end

for k, v in pairs(comp:GetToolList(false,"Saver")) do
  v.PNGFormat.CompressionLevel = 0
end

for k,tool in pairs(comp:GetToolList(false,"Saver")) do
  print(tool:GetAttrs("TOOLS_Name"))
end