-- "Dest:" pathmap leads to src/img/post
-- Set filename for post thumbnail
fname = composition:AskUser("Set filename", {
  {"Filename", "Text", Name = "Filename:"}
})

img_lg_export.Clip = "Dest:\\" .. fname.Filename .. "-lg.png"
img_md_export.Clip = "Dest:\\" .. fname.Filename .. "-md.png"
img_sm_export.Clip = "Dest:\\" .. fname.Filename .. "-sm.png"
img_xs_export.Clip = "Dest:\\" .. fname.Filename .. "-xs.png"
img_sq_export.Clip = "Dest:\\" .. fname.Filename .. "-sq.png"

-- "Dest:" pathmap leads to src/img/gallery
-- Set filename for gallery thumbnail
img_lg_export.Clip = "Dest:\\" .. fname.Filename .. "-lg.jpg"
img_md_export.Clip = "Dest:\\" .. fname.Filename .. "-md.jpg"
img_sm_export.Clip = "Dest:\\" .. fname.Filename .. "-sm.jpg"
img_xs_export.Clip = "Dest:\\" .. fname.Filename .. "-xs.jpg"

-- "Dest:" pathmap leads to src/img/gallery
-- Set filename for gallery animated thumbnail
img_lg_export.Clip = "Dest:\\" .. fname.Filename .. "-lg.mp4"
img_md_export.Clip = "Dest:\\" .. fname.Filename .. "-md.mp4"
img_sm_export.Clip = "Dest:\\" .. fname.Filename .. "-sm.mp4"
img_xs_export.Clip = "Dest:\\" .. fname.Filename .. "-xs.mp4"