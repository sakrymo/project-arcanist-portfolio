echo Insert source file name
read filename
format=mp4

echo $filename \
  $format
# ffmpeg -i input.mp4 -t 5 -c:v libx265 -preset veryslow -crf 32 -r 30 -an -vf
#   scale=808x632:flags=lanczos:force_original_aspect_ratio=increase,crop=808:632 ${filename}-lg.mp4
#   scale=646x505:flags=lanczos:force_original_aspect_ratio=increase,crop=646:505 ${filename}-md.mp4
#   scale=517x404:flags=lanczos:force_original_aspect_ratio=increase,crop=517:404 ${filename}-sm.mp4
#   scale=323x253:flags=lanczos:force_original_aspect_ratio=increase,crop=323:253 ${filename}-xs.mp4

#   -t 5 -c:v libvpx-vp9 -b:v 0 -crf 30 -deadline best -r 30 -an -vf
#   scale=808x632:flags=lanczos:force_original_aspect_ratio=increase,crop=808:632 ${filename}-lg.webm
#   scale=646x505:flags=lanczos:force_original_aspect_ratio=increase,crop=646:505 ${filename}-md.webm
#   scale=517x404:flags=lanczos:force_original_aspect_ratio=increase,crop=517:404 ${filename}-sm.webm
#   scale=323x253:flags=lanczos:force_original_aspect_ratio=increase,crop=323:253 ${filename}-xs.webm
ffmpeg -i $filename.$format \ 
  -t 5 -c:v libx265 -preset veryslow -crf 32 -r 30 -an -vf \
  scale=808x632:flags=lanczos:force_original_aspect_ratio=increase,crop=808:632 $filename-lg.mp4