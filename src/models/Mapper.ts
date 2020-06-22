export default interface Mapper<D, M> {
  fromDTO(dto: D):M;
  toDTO(model: M):D;
}
