# 자신감 상승 버튼
- 누르기만해도 자신감이 상승되는 버튼입니다.
- 힘든 하루를 보내고 있는 당신에게 자신감 상승 버튼을 추천합니다.

# 시연 영상
![cbb](https://user-images.githubusercontent.com/47452547/231187004-908df749-f904-404d-8223-d96b79e3a586.gif)

# 구현
### requestAnimationFrame
![스크린샷 2023-04-11 오후 11 02 00](https://user-images.githubusercontent.com/47452547/231187750-c318b214-578a-4b72-a61e-27ad26122bae.png)
- requestAnimationFrame을 사용하여 3프레임당 글자수가 늘어나게 하여 쾌적한 자신감 상승을 이뤄냈습니다.
- cancelAnimationFrame을 사용하여 글자가 전부 써지면 requestAnimationFrame을 취소하게 하였습니다.

### arrayLoopGenerator
![스크린샷 2023-04-11 오후 11 05 15](https://user-images.githubusercontent.com/47452547/231188575-7c7a6529-5072-4e9c-899b-934d00a7457f.png)
- generator를 사용하여 배열의 값을 지연적으로 계속 뽑을 수 있는 arrayLoopGenerator를 만들었습니다.
- 자신감 상승 멘트를 담은 배열을 제너레이터 함수를 사용하여 뽑아낼 수 있습니다.

![스크린샷 2023-04-11 오후 11 06 21](https://user-images.githubusercontent.com/47452547/231188883-c4bd4f97-0c8f-4ef2-ae23-68aef24c5a4f.png)
- 또한 자신감이 상승되는 동안(글자가 써지는 동안) 버튼이 disabled되어야 하는데 함수를 값으로 취급하여 해결 가능합니다

### arrayRandomGenerator
![스크린샷 2023-04-11 오후 11 09 07](https://user-images.githubusercontent.com/47452547/231189619-679fa937-ba7b-4441-b52c-ed6bccfa27a1.png)
- 배열의 값이 매번 순서대로 나오면 자신감이 팍 식을 수 있습니다.
- arrayRandomGenerator를 통해서 배열의 값을 랜덤으로 뽑아낼 수 있습니다.
- 랜덤한 값이 버튼을 누르기 전과 똑같은 값이 나오지 않도록 구현했습니다.